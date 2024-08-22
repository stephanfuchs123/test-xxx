// import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
// import { FaSearch } from 'react-icons/fa';

// const Search = () => {
//   const history = useHistory();
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     if (searchTerm) {
//       const timeoutId = setTimeout(() => {
//         history.push(`/search?query=${searchTerm}`);
//       }, 300); // 0.3 seconds delay

//       return () => clearTimeout(timeoutId);
//     }
//   }, [searchTerm, history]);

//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     history.push(`/search?query=${searchTerm}`);
//   };

//   const clearSearch = () => {
//     setSearchTerm("");
//     history.push('/'); // Navigate to the home page after clearing the search term
//   };

//   return (
//     <Form onSubmit={handleFormSubmit} className="searchbox">
//       <InputGroup>
//         <FormControl
//           type="text"
//           placeholder="Type here to search..."
//           value={searchTerm}
//           onChange={handleInputChange}
//         />
//         <InputGroup.Append>
//           <Button variant="outline-secondary" type="submit">
//             <FaSearch />
//           </Button>
//           {searchTerm && (
//             <button
//               type="button"
//               className="btn-clear"
//               onClick={clearSearch}
//             >
//               &times;
//             </button>
//           )}
//         </InputGroup.Append>
//       </InputGroup>
//     </Form>
//   );
// };

// export default Search;

import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import { RiSearchLine, RiCloseLine } from 'react-icons/ri'; // Import close icon
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
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
    <form className="search-container" onSubmit={handleFormSubmit}>
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

export default SearchBar;
