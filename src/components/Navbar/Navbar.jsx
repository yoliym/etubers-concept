import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar anim-nav">
      <div className="container nav-container">
        <a href="/" className="nav-brand">
          <span className="brand-marker"></span>
          ETUBERS
        </a>
        
        {/* Desktop Menu */}
        <div className="nav-desktop">
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#programs" className="nav-link">Programs</a>
            <a href="#resources" className="nav-link">Free Resources</a>
          </div>
          <button className="btn-nav">Join Etubers</button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="nav-mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`nav-mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="nav-mobile-links">
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#programs" onClick={() => setIsOpen(false)}>Programs</a>
          <a href="#resources" onClick={() => setIsOpen(false)}>Free Resources</a>
          <button className="btn-nav mobile-cta">Join Etubers</button>
        </div>
      </div>
    </nav>
  );
}
