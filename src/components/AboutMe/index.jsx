import React from 'react';

const AboutMeComponent = () => (
  <div className="about-me">
    <nav>
      <ul className="container">
        <li>Home</li>
        <li>Profile</li>
        <li className="search">
          <input type="text" className="search-input" placeholder="Search" />
        </li>
        <li>Logout</li>
      </ul>
    </nav>
  </div>
);

export default AboutMeComponent;
