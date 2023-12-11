// LeftFilterMenu.js

import React, { useState } from 'react';
import './LeftFilterMenu1.css';

const LeftFilterMenu1 = () => {
  const [isDurationOpen, setIsDurationOpen] = useState(false);


  const toggleDuration = () => {
    setIsDurationOpen(!isDurationOpen);
  };

 

  const clearAll = () => {
    // Reset all checkboxes and close dropdowns
    setIsDurationOpen(false);
  };

  return (
    <div className="left-filter-menu">
      <div className="filter-header">
        Filters
        <button onClick={clearAll}>Clear All</button>
      </div>

      <div className="dropdown-header" onClick={toggleDuration}>
        Duration {isDurationOpen ? '▲' : '▼'}
      </div>
      {isDurationOpen && (
        <div className="dropdown-content">
          <label>
            <input type="checkbox" /> Open
          </label>
          <label>
            <input type="checkbox" /> Closed
          </label>
          <label>
            <input type="checkbox" /> In Progress
          </label>
          <label>
            <input type="checkbox" /> Submitted
          </label>
        </div>
      )}
    </div>
  );
};

export default LeftFilterMenu1;
