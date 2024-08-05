import { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5010');

export const useSocket = () => {
  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, []);

  return socket;
};
