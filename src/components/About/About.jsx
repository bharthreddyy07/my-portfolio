import React from 'react';
import Education from './Education';
import Interests from './Interests';
import Hobbies from './Hobbies';
import './About.css';

const About = () => {
  return (
    <div id="about" className="about-container">
      <h2 className="about-heading">About Me</h2>
      
      
      <div className="about-sections-wrapper">
        <Education />
        <Interests />
        <Hobbies />
      </div>
    </div>
  );
};

export default About;
