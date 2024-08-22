import React, { useState, useRef } from 'react';
import './VideoPlayer.css'; // Import CSS file for styling

const VideoPlayer = ({ src, poster }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="video"
      ></video>
      <div className="controls">
        <button onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        {/* Add other controls like volume, fullscreen, etc. */}
      </div>
    </div>
  );
};

export default VideoPlayer;
