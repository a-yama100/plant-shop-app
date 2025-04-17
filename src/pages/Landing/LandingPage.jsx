import React from 'react';
import { Link } from 'react-router-dom';
import landingBg from '../../assets/images/landing-bg.jpg';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page" style={{ backgroundImage: `url(${landingBg})` }}>
      <div className="landing-content">
        <h1 className="company-name">Houseplant Haven</h1>
        
        <div className="company-description">
          <p>
            Welcome to Houseplant Haven, your premier destination for beautiful,
            healthy houseplants that bring life and vibrancy to any space. With over
            10 years of experience in plant cultivation, we carefully select and nurture
            each plant to ensure it thrives in your home or office. Our mission is to
            connect people with nature through stunning, easy-to-care-for plants that
            improve air quality and enhance your wellbeing.
          </p>
        </div>
        
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;