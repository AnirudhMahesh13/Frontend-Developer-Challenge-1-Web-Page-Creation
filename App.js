// App.js
import React, { useState } from 'react';
import Header from './Header';
import './App.css';
import SearchSection from './SearchSection';
import MenuSection from './MenuSection';
import TabContent from './TabContent';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('Tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Header darkMode={darkMode} />
      <SearchSection />
      <MenuSection onTabClick={handleTabClick} />
      <TabContent activeTab={activeTab} />

      <div className="switch">
        <span className="switch-label">Dark Mode:</span>
        <input
          type="checkbox"
          id="darkModeSwitch"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="darkModeSwitch"></label>
      </div>

      <style>
        {`
          :root {
            --text-color: ${darkMode ? '#fff' : '#000'};
          }
        `}
      </style>
    </div>
  );
};

export default App;
