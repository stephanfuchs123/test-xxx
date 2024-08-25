import React from "react";
import "./VideoPlayer.css";
import { ReactNetflixPlayer } from "react-netflix-player";

const VideoPlayer = ({ url, onClose }) => {
  const handleClose = () => {
    if (onClose) {
      console.log("closed");
      onClose();
    }
  };

  return (
    <div className="player-overlay">
      <ReactNetflixPlayer
        src={url}
        autoPlay={true}
        playerLanguage="en"
        title="Your Video Title" // aq saxeli cava
        primaryColor="#FF0000"
        backButton={handleClose}
        playerPlay={() => alert("Play button clicked")}
        playerPause={() => alert("Pause button clicked")}
        playerFullscreen={() => alert("Fullscreen button clicked")}
        playerSeek={() => alert("Seek")}
        onNextClick={() => alert("next episode")}
        reprodutionList={[
          { id: 1, playing: true },
          { id: 2, playing: false },
          { id: 3, playing: false },
          { id: 4, playing: false },
          { id: 5, playing: false },
          { id: 6, playing: false },
        ]}
      />
    </div>
  );
};

export default VideoPlayer;
