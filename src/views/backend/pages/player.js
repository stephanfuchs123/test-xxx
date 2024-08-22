import React, { useRef } from "react";
import "./VideoPlayer.css";
import { ReactNetflixPlayer } from "react-netflix-player";

const VideoPlayer = ({ url, onClose }) => {
  const playerRef = useRef(null);
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
      {/* <ReactPlayer url={url} playing controls width="100%" height="100%" /> */}
    </div>
  );
};

export default VideoPlayer;

{
  /* <ReactNetflixPlayer 
  src="your-video-url" 
  title="Your Video Title" 
  primaryColor="#FF0000"
  backButton={() => alert('Back button clicked')}
  playerPlay={() => alert('Play button clicked')}
  playerPause={() => alert('Pause button clicked')}
  playerFullscreen={() => alert('Fullscreen button clicked')}
  playerSeek={() => alert('Seek')}
  // Add more props as needed
/> */
}
