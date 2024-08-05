import React, { useEffect, useRef, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import io from 'socket.io-client';

const socket = io('http://localhost:5010'); 

const Meeting = () => {
  const { roomId } = useParams();
  const location = useLocation();
  const [peers, setPeers] = useState([]);
  const userVideoRef = useRef();
  const peersRef = useRef([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const name = params.get('name');

    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        userVideoRef.current.srcObject = stream;
        userVideoRef.current.onloadedmetadata = () => {
          userVideoRef.current.play().catch(error => console.error('Error playing video:', error));
        };

        console.log('User attempting to join room:', roomId, 'with name:', name);

        socket.emit('join-room', { roomId, name });

        socket.on('all-users', (users) => {
          console.log('All users in the room:', users);
          const peers = [];
          users.forEach((userId) => {
            console.log('Creating peer for user:', userId);
            const peer = createPeer(userId, socket.id, stream);
            peersRef.current.push({ peerID: userId, peer });
            peers.push(peer);
          });
          setPeers(peers);
        });

        socket.on('user-joined', (payload) => {
          console.log('New user joined:', payload.callerID);
          const peer = addPeer(payload.signal, payload.callerID, stream);
          peersRef.current.push({ peerID: payload.callerID, peer });
          setPeers((prevPeers) => [...prevPeers, peer]);
        });

        socket.on('receiving-returned-signal', (payload) => {
          console.log('Receiving returned signal from:', payload.id);
          const item = peersRef.current.find((p) => p.peerID === payload.id);
          if (item) {
            item.peer.signal(payload.signal);
          }
        });

        socket.on('disconnect', () => {
          console.log('User disconnected:', socket.id);
        });
      })
      .catch((error) => {
        console.error('Error accessing media devices:', error);
      });

    return () => {
      console.log('Socket disconnected');
    };
  }, [roomId, location.search]);

  function createPeer(userToSignal, callerID, stream) {
    const peer = new window.RTCPeerConnection({
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' }
      ]
    });
  
    peer.onicecandidate = (e) => {
      if (e.candidate) {
        console.log('Sending signal to user:', userToSignal, 'from:', callerID);
        socket.emit('sending-signal', { userToSignal, callerID, signal: e.candidate });
      }
    };
  
    peer.ontrack = (e) => {
      console.log('Receiving track from peer');
      const remoteVideo = document.createElement('video');
      remoteVideo.srcObject = e.streams[0];
      remoteVideo.playsInline = true;
      remoteVideo.autoplay = true;
      document.getElementById('remote-videos').append(remoteVideo);
    };
  
    stream.getTracks().forEach((track) => peer.addTrack(track, stream));
    return peer;
  }
  
  function addPeer(incomingSignal, callerID, stream) {
    const peer = new window.RTCPeerConnection({
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' }
      ]
    });
  
    peer.onicecandidate = (e) => {
      if (e.candidate) {
        console.log('Returning signal to caller:', callerID);
        socket.emit('returning-signal', { signal: e.candidate, callerID });
      }
    };
  
    peer.ontrack = (e) => {
      console.log('Receiving track from new peer');
      const remoteVideo = document.createElement('video');
      remoteVideo.srcObject = e.streams[0];
      remoteVideo.playsInline = true;
      remoteVideo.autoplay = true;
      document.getElementById('remote-videos').append(remoteVideo);
    };
  
    peer.signal(incomingSignal);
    console.log('Incoming signal from caller:', callerID);
  
    stream.getTracks().forEach((track) => peer.addTrack(track, stream));
    return peer;
  }
  

  return (
    <div className="meeting">
      <h2>Meeting Room {roomId}</h2>
      <div>
        <video ref={userVideoRef} playsInline muted autoPlay />
        <div id="remote-videos"></div>
      </div>
    </div>
  );
};

export default Meeting;
