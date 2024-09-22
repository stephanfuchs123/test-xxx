import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './GenreFilter.css';  // Import the CSS file

const GenreFilter = ({ onFilterChange }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch('https://dashboard.ucqire.com/api/stats');
        if (!response.ok) {
          throw new Error('Failed to fetch genres');
        }
        const data = await response.json();
        setGenres(data.genre || []);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);

  const handleChange = (event) => {
    const selectedGenre = event.target.value;
    onFilterChange(selectedGenre);
  };

  return (
    <div className="genre-filter-container">

      <select className="genre-select" onChange={handleChange} defaultValue="">
        <option value="" disabled>აირჩიეთ  ჟანრი</option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>{genre}</option>
        ))}
      </select>
    </div>
  );
};

GenreFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default GenreFilter;
