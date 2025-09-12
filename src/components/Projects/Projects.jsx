import React from 'react';
import './Projects.css'; // Don't forget to create this CSS file

const projectsData = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A full-stack e-commerce platform with user authentication, product listings, and a shopping cart.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/bharthreddyy07/E-commerce',
    liveLink: ''
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'A responsive dashboard for tracking social media metrics with dynamic charts and data visualization.',
    technologies: ['React', 'Chart.js', 'CSS Grid'],
    githubLink: '',
    liveLink: ''
  },
  {
    id: 3,
    title: 'Personal Portfolio',
    description: 'A personal portfolio website to showcase my projects and skills.',
    technologies: ['React', 'CSS', 'JavaScript'],
    githubLink: '',
    liveLink: ''
  },
  {
    id: 4,
    title: 'Task Management App',
    description: 'A task management application with features like task creation, editing, and deletion.',
    technologies: ['React', 'Redux', 'Firebase'],
    githubLink: '',
    liveLink: ''
  },



];

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects 💻</h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-pill">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-link">GitHub</a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-link live">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;