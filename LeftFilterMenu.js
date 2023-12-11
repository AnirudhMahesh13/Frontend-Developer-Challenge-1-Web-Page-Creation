// LeftFilterMenu.js

import React, { useState } from 'react';
import './LeftFilterMenu.css';

const LeftFilterMenu = () => {
  const [isDurationOpen, setIsDurationOpen] = useState(false);
  const [isLevelOpen, setIsLevelOpen] = useState(false);
  const [isOrganizationsOpen, setIsOrganizationsOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  const toggleDuration = () => {
    setIsDurationOpen(!isDurationOpen);
  };

  const toggleLevel = () => {
    setIsLevelOpen(!isLevelOpen);
  };

  const toggleOrganizations = () => {
    setIsOrganizationsOpen(!isOrganizationsOpen);
  };

  const toggleSkills = () => {
    setIsSkillsOpen(!isSkillsOpen);
  };

  const clearAll = () => {
    // Reset all checkboxes and close dropdowns
    setIsDurationOpen(false);
    setIsLevelOpen(false);
    setIsOrganizationsOpen(false);
    setIsSkillsOpen(false);
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
            <input type="checkbox" /> Less than 2 Hours
          </label>
          <label>
            <input type="checkbox" /> 2 - 4 Hours
          </label>
          <label>
            <input type="checkbox" /> 4 - 8 Hours
          </label>
          <label>
            <input type="checkbox" /> 1 - 2 Days
          </label>
          <label>
            <input type="checkbox" /> 3 - 5 Days
          </label>
          <label>
            <input type="checkbox" /> 5 + Days
          </label>
        </div>
      )}

      <div className="dropdown-header" onClick={toggleLevel}>
        Level {isLevelOpen ? '▲' : '▼'}
      </div>
      {isLevelOpen && (
        <div className="dropdown-content">
          <label>
            <input type="checkbox" /> Beginner
          </label>
          <label>
            <input type="checkbox" /> Intermediate
          </label>
          <label>
            <input type="checkbox" /> Advanced
          </label>
          <label>
            <input type="checkbox" /> Mixed
          </label>
        </div>
      )}

      <div className="dropdown-header" onClick={toggleOrganizations}>
        Organizations {isOrganizationsOpen ? '▲' : '▼'}
      </div>
      {isOrganizationsOpen && (
        <div className="dropdown-content">
          <label>
            <input type="checkbox" /> Prepr
          </label>
          <label>
            <input type="checkbox" /> Linux Foundation
          </label>
          <label>
            <input type="checkbox" /> Magnet
          </label>
          <label>
            <input type="checkbox" /> CertNexus
          </label>
          <label>
            <input type="checkbox" /> Ontario Chamber of Commerce
          </label>
          <label>
            <input type="checkbox" /> Youth Boost
          </label>
        </div>
      )}

      <div className="dropdown-header" onClick={toggleSkills}>
        Skills {isSkillsOpen ? '▲' : '▼'}
      </div>
      {isSkillsOpen && (
        <div className="dropdown-content">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>
        </div>
      )}
    </div>
  );
};

export default LeftFilterMenu;
