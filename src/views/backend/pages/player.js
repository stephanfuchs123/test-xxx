import React from "react";
import "./VideoPlayer.css";
import { ReactNetflixPlayer } from "react-netflix-player";

const VideoPlayer = ({ url }) => {
  console.log(url);

  return (
    <div className="player-overlay">
      <ReactNetflixPlayer
        src={url}
        autoPlay={true}
        playerLanguage="en"
        title="Your Video Title"
        primaryColor="#FF0000"
        backButton={() => alert("Back button clicked")}
        playerPlay={() => alert("Play button clicked")}
        playerPause={() => alert("Pause button clicked")}
        playerFullscreen={() => alert("Fullscreen button clicked")}
        playerSeek={() => alert("Seek")}
      />
    </div>
  );
};

export default VideoPlayer;