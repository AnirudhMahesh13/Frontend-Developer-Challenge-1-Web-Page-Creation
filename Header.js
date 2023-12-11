// Header.js
import React from 'react';

const Header = ({ darkMode }) => {
  const headerStyle = {
    backgroundColor: darkMode ? '#1a1a1a' : 'rgb(250, 250, 250)',
    color: darkMode ? '#fff' : '#000',
    padding: '10px',
    fontSize: 'bold',

  };

  return (
    <div className="header" style={headerStyle}>
      <div className="prepr">
        <a href="#">
          <img src="/preprimage.png" alt="wehaveanissue" />
        </a>
      </div>
      <nav>
        <ul className="nav-list">
          <li><a href="#">Explore</a></li>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">My Challenges</a></li>
          <li><a href="#">My Labs</a></li>
          <li><a href="#">My Projects</a></li>
          <li><a href="#">Career Explorer</a></li>
        </ul>
      </nav>
      <div className="bell">
        <a href="#">
          <img src="/preprbell.png" alt="wehaveanissue" />
        </a>
      </div>
      <div className="chat">
        <a href="#">
          <img src="/preprtext.png" alt="wehaveanissue" />
        </a>
      </div>
      <div className="question">
        <a href="#">
          <img src="/preprquestion.png" alt="wehaveanissue" />
        </a>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="pfp">
        <a href="#">
          <img src="/preprpfp.png" alt="wehaveanissue" />
        </a>
      </div>
      <div className="waffle">
        <a href="#">
          <img src="/preprwaffle.png" alt="wehaveanissue" />
        </a>
      </div>
    </div>
  );
}

export default Header;
