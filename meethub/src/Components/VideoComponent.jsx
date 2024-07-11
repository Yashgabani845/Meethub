import React, { useEffect, useRef } from 'react';

const VideoComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing media devices.', error);
      }
    };

    getUserMedia();
  }, []);

  return (
    <div>
      <h2>Local Video Stream</h2>
      <video ref={videoRef} autoPlay playsInline muted />
    </div>
  );
};

export default VideoComponent;
