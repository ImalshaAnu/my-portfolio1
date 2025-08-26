import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h2>Portfolio</h2>
        </div>
        
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => scrollToSection('home')} className="nav-link">
            Home
          </a>
          <a href="#about" onClick={() => scrollToSection('about')} className="nav-link">
            About
          </a>
          <a href="#skills" onClick={() => scrollToSection('skills')} className="nav-link">
            Skills
          </a>
          <a href="#projects" onClick={() => scrollToSection('projects')} className="nav-link">
            Projects
          </a>
          <a href="#contact" onClick={() => scrollToSection('contact')} className="nav-link">
            Contact
          </a>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

