// SearchSection.js
import React, { useState } from 'react';
import MenuSection from './MenuSection';
import './SearchSection.css';

const SearchSection = () => {
 

  return (
    <div className="search-section">
      <div className="background-rectangle">
        <div className="section-text">
          <h1>Explore Your Interests</h1>
          <p>We’ll recommend content based on your interests we’ve listed here.</p>
          <p>Feel free to add or remove topics to customize your experience!</p>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search skills" />
        </div>
        <h2>Click an interest to narrow your recommendations.</h2>
        <div className="interest-rectangles">
          {/* First Row */}
          <div className="rectangle">Copywriting</div>
          <div className="rectangle">Campaign Building</div>
          <div className="rectangle">Business Strategy</div>
          <div className="rectangle">Cross-platform Deveopment</div>
          <div className="rectangle">SQL</div>
          <div className="rectangle">PHP</div>

          {/* Second Row */}
          <div className="rectangle">Time Management</div>
          <div className="rectangle">AMI</div>
          <div className="rectangle">WAF</div>
          <div className="rectangle">Boundaries</div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
