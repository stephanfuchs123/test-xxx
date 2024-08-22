// // MainComponent.js
// import React, { useState, useEffect } from 'react';
// import { io } from 'socket.io-client';

// const socket = io('http://localhost:3001'); // Connect to your WebSocket server

// const MainComponent = () => {
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [currentTime, setCurrentTime] = useState(0);

//   useEffect(() => {
//     // Listen for control commands from the server
//     socket.on('control', (command) => {
//       if (command === 'pause') {
//         setIsPlaying(false);
//       } else if (command === 'resume') {
//         setIsPlaying(true);
//       } else if (typeof command === 'number') {
//         setCurrentTime(command);
//       }
//     });

//     return () => {
//       socket.disconnect(); // Disconnect from the WebSocket server when unmounting
//     };
//   }, []);

//   const handlePause = () => {
//     socket.emit('control', 'pause'); // Send pause command to the server
//   };

//   const handleResume = () => {
//     socket.emit('control', 'resume'); // Send resume command to the server
//   };

//   const handleSeek = (time) => {
//     socket.emit('control', time); // Send seek command to the server
//   };

//   return (
//     <div>
//       {/* Render video player here */}
//     </div>
//   );
// };

// export default MainComponent;
