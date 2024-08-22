// src/PlayButton.js
import React, { useState } from 'react';

const PlayButton = ({ onPlay }) => {
  const [url, setUrl] = useState('');

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleClick = () => {
    onPlay(url);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter video URL"
        value={url}
        onChange={handleChange}
      />
      <button onClick={handleClick} className="btn btn-hover iq-button data-play">
        <i className="fa fa-play mr-2" aria-hidden="true"></i>
        Play Now
      </button>
    </div>
  );
};

export default PlayButton;
