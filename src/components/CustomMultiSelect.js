// import React, { useState, useRef, useEffect } from 'react';
// import { createPortal } from 'react-dom';
// import './CustomMultiSelect.css';

// const CustomMultiSelect = ({ options, onChange }) => {
//   const [show, setShow] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const dropdownRef = useRef(null);
//   const menuRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target) && !dropdownRef.current.contains(event.target)) {
//         setShow(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const handleToggle = () => {
//     setShow(!show);
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleOptionChange = (option) => {
//     const updatedOptions = selectedOptions.includes(option)
//       ? selectedOptions.filter((o) => o !== option)
//       : [...selectedOptions, option];

//     setSelectedOptions(updatedOptions);
//     onChange(updatedOptions);
//   };

//   const handleClearAll = () => {
//     setSelectedOptions([]);
//     onChange([]);
//   };

//   const filteredOptions = options.filter((option) =>
//     option.label.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const dropdownMenu = (
//     <div className={`custom-dropdown-renamed ${show ? 'show' : ''}`} ref={menuRef} style={{ top: dropdownRef.current?.getBoundingClientRect().bottom + window.scrollY, left: dropdownRef.current?.getBoundingClientRect().left }}>
//       <input
//         type="text"
//         placeholder="Search genres"
//         value={searchTerm}
//         onChange={handleSearchChange}
//         className="custom-search-input-renamed"
//       />
//       <div className="custom-dropdown-options-renamed">
//         {filteredOptions.map((option) => (
//           <div key={option.value} className="custom-checkbox-renamed">
//             <input
//               type="checkbox"
//               id={option.value}
//               checked={selectedOptions.includes(option.value)}
//               onChange={() => handleOptionChange(option.value)}
//             />
//             <label htmlFor={option.value}>{option.label}</label>
//           </div>
//         ))}
//       </div>
//       <div className="custom-dropdown-footer-renamed">
//         <button className="clear-all-btn-renamed" onClick={handleClearAll}>
//           Clear All
//         </button>
//         <button className="done-btn-renamed" onClick={() => setShow(false)}>
//           Done
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="custom-multi-select-container-renamed" ref={dropdownRef}>
//       <button className="custom-filter-button-renamed" onClick={handleToggle}>
//         {selectedOptions.length > 0 ? `${selectedOptions.length} Genres Selected` : 'Select Genres'}
//       </button>
//       {show && createPortal(dropdownMenu, document.body)}
//     </div>
//   );
// };

// export default CustomMultiSelect;


import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import "./CustomMultiSelect.css";

const CustomMultiSelect = ({ options, onChange }) => {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setShow(!show);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOptionClick = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((o) => o !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedOptions);
    onChange(updatedOptions);
  };

  const handleClearAll = () => {
    setSelectedOptions([]);
    onChange([]);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dropdownMenu = (
    <div
      className={`custom-dropdown-renamed ${show ? "show" : ""}`}
      ref={menuRef}
      style={{
        top: dropdownRef.current?.getBoundingClientRect().bottom + window.scrollY,
        left: dropdownRef.current?.getBoundingClientRect().left,
        width: dropdownRef.current?.offsetWidth, // Set width to match button
      }}
    >
      <input
        type="text"
        placeholder="Search genres"
        value={searchTerm}
        onChange={handleSearchChange}
        className="custom-search-input-renamed"
      />
      <div className="custom-dropdown-options-renamed">
        {filteredOptions.map((option) => (
          <div
            key={option.value}
            className={`custom-option-renamed ${
              selectedOptions.includes(option.value) ? "selected" : ""
            }`}
            onClick={() => handleOptionClick(option.value)}
          >
            {option.label}
          </div>
        ))}
      </div>
      <div className="custom-dropdown-footer-renamed">
        <button className="clear-all-btn-renamed" onClick={handleClearAll}>
          Clear All
        </button>
        <button className="done-btn-renamed" onClick={() => setShow(false)}>
          Done
        </button>
      </div>
    </div>
  );

  return (
    <div className="custom-multi-select-container-renamed" ref={dropdownRef}>
      <button className="custom-filter-button-renamed" onClick={handleToggle}>
        {selectedOptions.length > 0
          ? `${selectedOptions.length} Genres Selected`
          : "Select Genres"}
      </button>
      {show && createPortal(dropdownMenu, document.body)}
    </div>
  );
};

export default CustomMultiSelect;
