// import React, { useState, useEffect } from "react";
// import { Button, Tooltip, OverlayTrigger, FormControl } from "react-bootstrap";
// import CustomMultiSelect from "./CustomMultiSelect";
// import "./FilterForm.css";

// function FilterForm({
//   genres,
//   countries,
//   minYear,
//   maxYear,
//   minImdb,
//   maxImdb,
//   onFiltersChange,
//   setUserInteracted, // Receive setUserInteracted function from parent
// }) {
//   const [filters, setFilters] = useState({
//     selectedGenres: [],
//     selectedCountry: "",
//     selectedMinYear: "",
//     selectedMaxYear: "",
//     selectedMinImdb: "",
//     selectedMaxImdb: "",
//   });

//   const [showFilters, setShowFilters] = useState(false);

//   useEffect(() => {
//     const filterCriteria = {
//       genre: filters.selectedGenres.join(","),
//       country: filters.selectedCountry,
//       yearRange: `${filters.selectedMinYear || minYear || ""}-${
//         filters.selectedMaxYear || maxYear || ""
//       }`,
//       imdbRange: `${filters.selectedMinImdb || minImdb || ""}-${
//         filters.selectedMaxImdb || maxImdb || ""
//       }`,
//     };

//     if (onFiltersChange) onFiltersChange(filterCriteria);
//   }, [filters, minYear, maxYear, minImdb, maxImdb, onFiltersChange]);

//   const resetFilters = () => {
//     setFilters({
//       selectedGenres: [],
//       selectedCountry: "",
//       selectedMinYear: "",
//       selectedMaxYear: "",
//       selectedMinImdb: "",
//       selectedMaxImdb: "",
//     });
//   };

//   const handleFilterChange = (name, value) => {
//     setFilters({ ...filters, [name]: value });
//     setUserInteracted(true); // Set user interaction flag to true upon filter change
//   };

//   const applyFilters = () => {
//     setShowFilters(false);
//   };

//   return (
//     <div className="filter-form-wrapper">
//       <Button
//         variant="outline-light"
//         className="filter-btn"
//         onClick={() => setShowFilters(!showFilters)}
//       >
//         Filter Movies
//       </Button>
//       <div className={`filter-form-container ${showFilters ? "active" : ""}`}>
//         <FilterControl
//           label="Genres:"
//           tooltip="Select one or more genres"
//           control={
//             <CustomMultiSelect
//               options={genres.map((genre) => ({ value: genre, label: genre }))}
//               onChange={(value) => handleFilterChange("selectedGenres", value)}
//             />
//           }
//         />
//         <FilterControl
//           label="Country:"
//           tooltip="Select the country of production"
//           control={
//             <FormControl
//               as="select"
//               value={filters.selectedCountry}
//               onChange={(e) =>
//                 handleFilterChange("selectedCountry", e.target.value)
//               }
//             >
//               <option value="">Select Country</option>
//               {countries
//                 .sort((a, b) => a.localeCompare(b))
//                 .map((country) => (
//                   <option key={country} value={country}>
//                     {country}
//                   </option>
//                 ))}
//             </FormControl>
//           }
//         />

//         <FilterControl
//           label="Min Year:"
//           tooltip="Select the minimum release year"
//           control={
//             <FormControl
//               type="number"
//               value={filters.selectedMinYear}
//               onChange={(e) =>
//                 handleFilterChange("selectedMinYear", e.target.value)
//               }
//               placeholder={minYear}
//             />
//           }
//         />
//         <FilterControl
//           label="Max Year:"
//           tooltip="Select the maximum release year"
//           control={
//             <FormControl
//               type="number"
//               value={filters.selectedMaxYear}
//               onChange={(e) =>
//                 handleFilterChange("selectedMaxYear", e.target.value)
//               }
//               placeholder={maxYear}
//             />
//           }
//         />
//         <FilterControl
//           label="Min IMDB:"
//           tooltip="Select the minimum IMDB rating"
//           control={
//             <FormControl
//               type="number"
//               value={filters.selectedMinImdb}
//               onChange={(e) =>
//                 handleFilterChange("selectedMinImdb", e.target.value)
//               }
//               placeholder={minImdb}
//             />
//           }
//         />
//         <FilterControl
//           label="Max IMDB:"
//           tooltip="Select the maximum IMDB rating"
//           control={
//             <FormControl
//               type="number"
//               value={filters.selectedMaxImdb}
//               onChange={(e) =>
//                 handleFilterChange("selectedMaxImdb", e.target.value)
//               }
//               placeholder={maxImdb}
//             />
//           }
//         />
//         <Button
//           variant="outline-light"
//           className="reset-btn alpha"
//           onClick={resetFilters}
//         >
//           Reset
//         </Button>
//         <Button
//           variant="outline-light"
//           className="done-btn alpha"
//           onClick={applyFilters}
//         >
//           Done
//         </Button>
//       </div>
//     </div>
//   );
// }

// function FilterControl({ label, tooltip, control }) {
//   return (
//     <div className="col-md-2 form-input col-sm-6 mb-3">
//       <label>{label}</label>
//       <OverlayTrigger
//         placement="top"
//         overlay={<Tooltip id="button-tooltip">{tooltip}</Tooltip>}
//       >
//         <div>{control}</div>
//       </OverlayTrigger>
//     </div>
//   );
// }

// export default FilterForm;



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
