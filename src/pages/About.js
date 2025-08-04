import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section">
      
      <div className="about-container">
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hi! I'm a front-end developer with a passion for creating modern and responsive web apps using React, JavaScript, and CSS.
            I enjoy transforming ideas into interactive digital experiences. Always learning, always building.
          </p>
        </div>

        <div className="about-image">
          <img src=" /images/about-bg.jpg" alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default About;
