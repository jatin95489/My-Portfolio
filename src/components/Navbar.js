import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" exact="true" activeclassname="active" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" activeclassname="active" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/projects" activeclassname="active" onClick={() => setMenuOpen(false)}>Projects</NavLink>
        <NavLink to="/contact" activeclassname="active" onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </div>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;

