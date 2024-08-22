// JoinRoomForm.js
import React, { useState } from 'react';

const JoinRoomForm = () => {
  const [roomName, setRoomName] = useState('');
  const [passcode, setPasscode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement room joining logic (e.g., send data to backend)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Room Name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Passcode"
        value={passcode}
        onChange={(e) => setPasscode(e.target.value)}
      />
      <button type="submit">Join Room</button>
    </form>
  );
};

export default JoinRoomForm;
