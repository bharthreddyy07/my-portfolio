
import React from 'react';
import './Skills.css';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: [ 'Python', 'C','Java'],
   
  },
  {
    category: 'Web Technologies',
    skills: ['HTML', 'CSS', 'React', 'Node.js', 'Express'],
    
  },
  {
    category: 'Databases',
    skills: [ 'MySQL','MongoDB', ],
  
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', ],
   
  },
];

const Skills = () => {
  return (
    <div id="skills" className="main-container">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((categoryData, index) => (
          <div key={index} className="skills-card" >
            <h3 className="category-heading">{categoryData.category}</h3>
            <div className="skill-list">
              {categoryData.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
