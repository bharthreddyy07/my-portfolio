import React from 'react';
import './Projects.css'; // Don't forget to create this CSS file

const projectsData = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A full-stack e-commerce platform with user authentication, product listings, and a shopping cart.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/bharthreddyy07/E-commerce',
    liveLink: 'https://e-commerce-bharath07.vercel.app/'
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
    title: ' Enhanced Deep Fake Image Detection via Feature Fusion',
    description: 'A deep learning project focused on improving the detection of deep fake images using advanced feature fusion techniques.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'Machine Learning'],
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
