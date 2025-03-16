import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            <span className="text-primary">Best AI Training</span> for<br />
            Business & <br />
            Leadership Teams in<br />
            <span className="text-accent">Indiana</span>
          </h1>
          <p className="hero-subtitle">
            Practical, hands-on AI workshops to boost productivity,
            enhance decision-making, and future-proof your business.
          </p>
          <p className="hero-cta">
            Join Indiana's leading AI training program today!
          </p>
          <div className="hero-buttons">
            <Link to="/workshops" className="btn btn-primary">
              <span className="icon">👥</span> AI Workshops
            </Link>
            <Link to="/webinar" className="btn btn-secondary">
              <span className="icon">▶️</span> Free Webinar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 