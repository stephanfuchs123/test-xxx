
import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import { RiSearchLine, RiCloseLine } from 'react-icons/ri'; // Import close icon
import { useHistory } from 'react-router-dom';

const SearchBar2 = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const handleClick = () => {
    if (isActive) {
      setIsActive(false);
      setSearchTerm('');
      history.push('/'); // Navigate to home page if closing search bar
    } else {
      setIsActive(true);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      const timeoutId = setTimeout(() => {
        history.push(`/search?query=${searchTerm}`);
      }, 300); // 0.3 seconds delay

      return () => clearTimeout(timeoutId);
    }
  }, [searchTerm, history]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    history.push(`/search?query=${searchTerm}`);
  };

  return (
    <form className="search-container mobile-more-menu" onSubmit={handleFormSubmit}>
      <input
        type="text"
        className={`search-input ${isActive ? 'active' : ''}`}
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {isActive ? (
        <RiCloseLine className="search-icon" onClick={handleClick} />
      ) : (
        <RiSearchLine className="search-icon" onClick={handleClick} />
      )}
    </form>
  );
};

export default SearchBar2;
