import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

const VideoCall = () => {
  const [socket, setSocket] = useState(null);
  const [peers, setPeers] = useState([]);
  const localVideoRef = useRef(null);
  const remoteVideoRefs = useRef({});
  const peerConnections = useRef({});

  useEffect(() => {
    const s = io('http://localhost:5000');
    setSocket(s);

    const roomId = 'test-room'; // example room ID
    s.emit('join-room', roomId);

    s.on('all-users', users => {
      users.forEach(userID => {
        callUser(userID);
      });
    });

    s.on('receive-offer', async ({ offer, from }) => {
      const peerConnection = createPeerConnection(from);
      await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(answer);
      socket.emit('send-answer', { answer, to: from });
    });

    s.on('receive-answer', async ({ answer, from }) => {
      const peerConnection = peerConnections.current[from];
      await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
    });

    s.on('receive-candidate', async ({ candidate, from }) => {
      const peerConnection = peerConnections.current[from];
      await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
    });

    s.on('user-disconnected', id => {
      if (peerConnections.current[id]) {
        peerConnections.current[id].close();
        delete peerConnections.current[id];
      }
    });

    return () => {
      s.disconnect();
    };
  }, []);

  const createPeerConnection = (userID) => {
    const peerConnection = new RTCPeerConnection({
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' }
      ]
    });

    peerConnections.current[userID] = peerConnection;

    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit('send-candidate', { candidate: event.candidate, to: userID });
      }
    };

    peerConnection.ontrack = (event) => {
      const videoElement = document.createElement('video');
      videoElement.srcObject = event.streams[0];
      videoElement.autoplay = true;
      remoteVideoRefs.current.appendChild(videoElement);
    };

    return peerConnection;
  };

  const callUser = async (userID) => {
    const peerConnection = createPeerConnection(userID);
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideoRef.current.srcObject = stream;
    stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));

    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    socket.emit('send-offer', { offer, to: userID });
  };

  return (
    <div>
      <h1>Video Call</h1>
      <video ref={localVideoRef} autoPlay playsInline muted />
      <div ref={remoteVideoRefs}></div>
    </div>
  );
};

export default VideoCall;
