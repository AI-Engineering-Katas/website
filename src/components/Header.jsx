import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo-container">
          <img src="/path-to-your-profile-pic.jpg" alt="Profile" className="profile-pic" />
          <span className="logo-text">Your Brand</span>
        </Link>
        
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/workshops">AI Workshops</Link>
          <Link to="/podcast">Podcast</Link>
          <Link to="/resources">AI News & Resources</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        
        <Link to="/webinar" className="btn btn-cta">
          FREE AI WEBINAR
        </Link>
      </div>
    </header>
  );
};

export default Header; 