import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EnterForm = () => {
  const [name, setName] = useState('');
  const [roomId, setRoomId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5010/api/check-room', { roomId });
      if (response.data.exists) {
        navigate(`/meeting/${roomId}?name=${name}`);
      } else {
        setError('Room does not exist');
      }
    } catch (err) {
      setError('Error joining the room');
      console.error(err);
    }
  };

  return (
    <div className="enter-form">
      <h2>Join a Room</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter 6-digit Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          maxLength={6}
          required
        />
        <button type="submit">Join Room</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default EnterForm;
