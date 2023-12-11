/* SearchDropdown.js */
import React, { useState } from 'react';
import './SearchDropdown.css';

const SearchDropdown = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const options = ['Most Popular']; // Add your dropdown options

  return (
    <div className="search-dropdown-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleSearchChange}
      />
      <button className="search-button" onClick={handleDropdownToggle}>
        Search
      </button>
      <p>Sort by</p>
      <button className="dropdown-button" onClick={handleDropdownToggle}>
        Recently Added ▼
      </button>
      {isDropdownOpen && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div key={option}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
