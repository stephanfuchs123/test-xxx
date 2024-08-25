import React, { useState, useEffect } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FaPlay } from 'react-icons/fa';
import VideoPlayer from "../pages/player";
import './Episodes.css';

const Episodes = ({ episodes }) => {
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [playingUrl, setPlayingUrl] = useState(null); // State to handle the currently playing video URL

  useEffect(() => {
    if (episodes.length > 0) {
      setSelectedSeason(episodes[0].season_title); // Automatically select the first season
    }
  }, [episodes]);

  if (!Array.isArray(episodes)) {
    return <p>No episodes available</p>;
  }

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleSeasonSelect = (season) => {
    setSelectedSeason(season);
  };

  const handlePlayClick = (url) => {
    setPlayingUrl(url); // Set the URL of the episode to play
  };

  const handlePlayerClose = () => {
    setPlayingUrl(null); // Close the video player
  };

  const seasons = episodes.map((season) => season.season_title); // Get season titles

  const selectedEpisodes = episodes.find(season => season.season_title === selectedSeason)?.episodes || [];

  return (
    <div className="episodes-container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="episodes-title">Episodes List</h3>
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
          <DropdownToggle caret className="btn btn-secondary">
            {selectedSeason ? `Season ${selectedSeason}` : 'Select Season'}
          </DropdownToggle>
          <DropdownMenu>
            {seasons.map((season, index) => (
              <DropdownItem key={index} onClick={() => handleSeasonSelect(season)}>
                Season {season}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      <ul className="list-group">
        {selectedEpisodes.map((episode) => (
          <React.Fragment key={episode.id}>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span className="episode-title">{episode.title}</span>
              <button 
                className="btn btn-link" 
                onClick={() => handlePlayClick(episode.url)}>
                <FaPlay size={20} />
              </button>
            </li>
            <hr />
          </React.Fragment>
        ))}
      </ul>
      {playingUrl && (
        <VideoPlayer url={playingUrl} onClose={handlePlayerClose} />
      )}
    </div>
  );
};

export default Episodes;
