import React from 'react';
import './Education.css';

const educationData = [
  {
    year: '2021-2025',
    degree: 'B.Tech. in Computer Science',
    institution: 'Vignan University, Vadlamudi'
  },
  {
    year: '2019 - 2021',
    degree: 'Intermediate, MPC',
    institution: 'Vignan Co-Operative Junior College, Vadlamudi'
  },
  {
    year: '2019',
    degree: 'High School, SSC',
    institution: 'Vikas High School, Piduguralla'
  },
];

const Education = () => {
  return (
    <div className="education-container">
      <h3 className="education-heading">Education</h3>
      <div className="timeline-wrapper">
        {educationData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-date">
              <span className="year-pill">{item.year}</span>
            </div>
            <div className="timeline-content">
              <h4>{item.degree}</h4>
              <p>{item.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
