import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div id="hero" className="hero-container">
      <div className="hero-image-container">
          <img
            src="boycircle.png"
            alt="Bharath Reddy"
            className="hero-image"
          />
        </div>
      <div className="hero-content">
        <h1 className="hero-title">Naganjaneya Bharath Reddy Ramana</h1>
        <p className="hero-subtitle">I'm a Passionate Software Developer</p>
        
        <div className="hero-links">
          <a href="mailto:rbharathreddy544@gmail.com" className="hero-pill" target="_blank" rel="noopener noreferrer">rbharathreddy544@gmail.com</a>
          <a href="tel:+91 9346384685" className="hero-pill" target="_blank" rel="noopener noreferrer">+91 9346384685</a>
          <a href="https://www.linkedin.com/in/naganjaneya-bharath-reddy-ramana/" className="hero-pill" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/bharthreddyy07" className="hero-pill" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
