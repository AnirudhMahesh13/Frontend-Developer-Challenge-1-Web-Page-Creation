// MenuSection.js
import React, { useState } from 'react';
import './MenuSection.css';

const MenuSection = ({ onTabClick }) => {
  const tabs = ['Tab1', 'Tab2', 'Tab3', 'Tab4'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabClick(tab);
  };

  return (
    <div className="menu-section">
      {tabs.map(tab => (
        <button
          key={tab}
          className={activeTab === tab ? 'active' : ''}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default MenuSection;
