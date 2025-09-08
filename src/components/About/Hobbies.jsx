import React from 'react';
import './Hobbies.css';

const hobbies = [
  "Watching Science Fiction Movies 🎬",
  "Cooking 🍳",
  "Photography 📸",
  "Video Gaming 🎮",
];

const Hobbies = () => {
  return (
    <div className="hobbies-card">
      <h3 className="hobbies-heading">Hobbies</h3>
      <ul className="hobbies-list">
        {hobbies.map((hobby, index) => (
          <li key={index} className="hobby-item">{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
