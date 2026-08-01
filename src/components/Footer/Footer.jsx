import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section reveal-section">
      <div className="footer-container">
        
        {/* Main Footer Grid */}
        <div className="footer-grid">
          
          {/* Brand Column */}
          <div className="footer-brand-col reveal-el delay-1">
            <h2 className="footer-logo">ETUBERS</h2>
            <p className="footer-description">
              Practical digital education, free learning resources and guided mentorship focused on turning knowledge into action.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="footer-nav-col reveal-el delay-2">
            <h3 className="footer-heading">Platform</h3>
            <ul className="footer-links">
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#programs" className="footer-link">Programs</a></li>
              <li><a href="#journey" className="footer-link">Learning Journey</a></li>
              <li><a href="#resources" className="footer-link">Free Resources</a></li>
              <li><a href="#faq" className="footer-link">FAQ</a></li>
            </ul>
          </div>

          {/* Official Links Column */}
          <div className="footer-nav-col reveal-el delay-3">
            <h3 className="footer-heading">Official Links</h3>
            <ul className="footer-links">
              <li><a href="https://www.youtube.com/@etubers" target="_blank" rel="noopener noreferrer" className="footer-link">YouTube</a></li>
              <li><a href="https://www.instagram.com/etubersofficial/" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a></li>
              <li><a href="https://t.me/etubers" target="_blank" rel="noopener noreferrer" className="footer-link">Telegram</a></li>
              <li><a href="https://www.etubers.org/" target="_blank" rel="noopener noreferrer" className="footer-link">Official Website</a></li>
              <li><a href="https://upwork.etubers.org/" target="_blank" rel="noopener noreferrer" className="footer-link">Mentorship</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom reveal-el delay-4">
          
          <div className="footer-developer-credit">
            <span className="credit-eyebrow">DESIGNED & DEVELOPED BY</span>
            <span className="credit-name">Abdi Tilahun</span>
            <span className="credit-role">Front-End Developer</span>
            <a 
              href="https://www.upwork.com/freelancers/~01b130a44cae30af9c" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="credit-link"
            >
              Available for hire on Upwork
            </a>
          </div>

          <div className="footer-legal">
            <div className="footer-disclaimer">
              This is an independent portfolio concept created to demonstrate front-end design and development. It is not the official Etubers website and is not presented as an official partnership.
            </div>
            <div className="footer-copyright">
              &copy; {currentYear} Etubers Concept Website
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
