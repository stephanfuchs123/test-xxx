// App.js
import React, { useState } from 'react';
import CreateRoomForm from './CreateRoomForm';
import JoinRoomForm from './JoinRoomForm';
import MainComponent from './MainComponent';

const Cinema = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here (e.g., using a login API)
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    setIsLoggedIn(false);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <>
          <button onClick={handleLogout}>Logout</button>
          <CreateRoomForm />
          <JoinRoomForm />
          <MainComponent />
        </>
      )}
    </div>
  );
};

export default Cinema;
