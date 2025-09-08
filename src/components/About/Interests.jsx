import React from 'react';
import './Interests.css';

const interests = [
  "Web Development",
  "Machine Learning",
  "Database Management",
  "Artificial Intelligence",
  "Cloud Computing",
];

const Interests = () => {
  return (
    <div className="interests-card">
      <h3 className="interests-heading">Interests</h3>
      <ul className="interests-list">
        {interests.map((interest, index) => (
          <li key={index} className="interest-item">{interest}</li>
        ))}
      </ul>
    </div>
  );
};

export default Interests;
