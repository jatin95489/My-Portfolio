import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Weather App',
    description: 'A simple weather application using React and OpenWeatherMap API.',
    github: 'https://github.com/yourname/weather-app',
    live: 'https://your-weather-app.netlify.app',
  },
  {
    title: 'Task Manager',
    description: 'Manage daily tasks with React and local storage.',
    github: 'https://github.com/yourname/task-manager',
    live: 'https://task-manager-demo.netlify.app',
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with React and custom CSS.',
    github: 'https://github.com/yourname/portfolio',
    live: 'https://your-portfolio.netlify.app',
  },
];

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="buttons">
              <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={project.live} target="_blank" rel="noreferrer" className="live-btn">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
