import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Handle scroll for navbar background
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    // Handle intersection observer for active section
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Select all sections with IDs
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // Handle mobile menu scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'journey', label: 'Learning Journey' },
    { id: 'resources', label: 'Free Resources' },
    { id: 'faq', label: 'FAQ' }
  ];

  return (
    <nav className={`navbar anim-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="/" className="nav-brand">
          <span className="brand-marker"></span>
          ETUBERS
        </a>
        
        {/* Desktop Menu */}
        <div className="nav-desktop">
          <div className="nav-links">
            {navLinks.map(link => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          {/* Changed button to a real link */}
          <a href="https://upwork.etubers.org/" target="_blank" rel="noopener noreferrer" className="btn-nav">
            Join Etubers
          </a>
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
          {navLinks.map(link => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              onClick={() => setIsOpen(false)}
              className={activeSection === link.id ? 'active' : ''}
            >
              {link.label}
            </a>
          ))}
          {/* Changed button to a real link */}
          <a href="https://upwork.etubers.org/" target="_blank" rel="noopener noreferrer" className="btn-nav mobile-cta">
            Join Etubers
          </a>
        </div>
      </div>
    </nav>
  );
}
