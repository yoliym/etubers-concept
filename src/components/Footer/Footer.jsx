import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <span className="gradient-text font-bold text-xl">E-TUBERS</span>
          <p>The premier accelerator for modern digital content creators.</p>
        </div>
        <div className="footer-links">
          <div>
            <h5>Programs</h5>
            <a href="#">Creator Mastery</a>
            <a href="#">Faceless Channels</a>
            <a href="#">Short-Form Viral</a>
          </div>
          <div>
            <h5>Company</h5>
            <a href="#">About Us</a>
            <a href="#">Success Stories</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <p>© {new Date().getFullYear()} E-Tubers Concept. All rights reserved.</p>
      </div>
    </footer>
  );
}
