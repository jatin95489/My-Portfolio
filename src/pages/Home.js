
import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="home-section">
      <video autoPlay loop muted className="bg-video">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="home-content">
        <h1>Hello, I'm <span>Jatin Sakhuja</span></h1>
        <p>A passionate Frontend Developer building interactive websites with React & CSS.</p>
        <a href="/projects" className="cta-button">View Projects</a>
      </div>
    </section>
  );
}

export default Home;

