// TabContent.js
import React from 'react';
import './TabContent.css';
import LeftMenu from './LeftMenu';
import LeftMenu1 from './LeftMenu1';
import LeftMenu2 from './LeftMenu2';
import LeftFilterMenu from './LeftFilterMenu';
import LeftFilterMenu1 from './LeftFilterMenu1';
import SearchDropdown from './SearchDropdown';
import Labs from './Labs';

const TabContent = ({ activeTab }) => {
  const tabContents = {
    Tab1: <div><SearchDropdown/>,<Labs/><LeftMenu/>,<LeftFilterMenu/></div>,
    Tab2: <div><SearchDropdown/>,<Labs/><LeftMenu1/>,<LeftFilterMenu/></div>,
    Tab3: <div><SearchDropdown/>,<Labs/><LeftMenu2/>,<LeftFilterMenu/></div>,
    Tab4: <div><SearchDropdown/>,<Labs/><LeftFilterMenu1/></div>,
  };

  return (
    <div className="content-section">
      {tabContents[activeTab]}
    </div>
  );
}

export default TabContent;
