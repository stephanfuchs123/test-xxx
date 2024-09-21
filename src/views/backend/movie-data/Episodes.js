import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { FaPlay } from "react-icons/fa";
import { useHistory } from "react-router-dom"; // Import useHistory if using React Router
import "./Episodes.css";

const Episodes = ({ episodes, data, onPlay }) => {
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const history = useHistory(); // Initialize useHistory hook for navigation

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

  const handlePlayClick = (episode) => {
    // Create the URL path using data.id and episode.id
    const url = `/tvshow/${data.id}/${episode.id}`;
    history.push(url); // Navigate to the URL
    onPlay(episode.url); // Optionally call the onPlay function if needed
  };

  const seasons = episodes.map((season) => season.season_title); // Get season titles

  const selectedEpisodes =
    episodes.find((season) => season.season_title === selectedSeason)
      ?.episodes || [];

  return (
    <div className="episodes-container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="episodes-title">Episodes List</h3>
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
          <DropdownToggle caret className="btn btn-secondary">
            {selectedSeason ? `Season ${selectedSeason}` : "Select Season"}
          </DropdownToggle>
          <DropdownMenu>
            {seasons.map((season, index) => (
              <DropdownItem
                key={index}
                onClick={() => handleSeasonSelect(season)}
              >
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
                onClick={() => handlePlayClick(episode)}
              >
                <FaPlay size={20} />
              </button>
            </li>
            <hr />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Episodes;
