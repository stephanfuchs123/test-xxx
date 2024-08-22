// CreateRoomForm.js
import React, { useState } from 'react';

const CreateRoomForm = () => {
  const [roomName, setRoomName] = useState('');
  const [passcode, setPasscode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement room creation logic (e.g., send data to backend)
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
        placeholder="Passcode (optional)"
        value={passcode}
        onChange={(e) => setPasscode(e.target.value)}
      />
      <button type="submit">Create Room</button>
    </form>
  );
};

export default CreateRoomForm;
