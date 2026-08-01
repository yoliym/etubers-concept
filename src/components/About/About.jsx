import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-content">
          <h2 className="section-title">Reinventing Content Creation Education</h2>
          <p className="about-text">
            E-Tubers is built for ambitious creators who want to cut through the noise. We combine data science, algorithm analysis, and cinematic storytelling to build enduring digital brands.
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-num">01</span>
              <div>
                <h4>Data-Driven Strategy</h4>
                <p>Learn to analyze click-through rates and retention graphs like a pro.</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-num">02</span>
              <div>
                <h4>Community & Feedback</h4>
                <p>Direct peer reviews and expert feedback on every video before publish.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-visual glass-card">
          <div className="visual-preview">
            <span className="visual-tag">Live Analytics Preview</span>
            <div className="graph-placeholder">
              <div className="bar bar-1"></div>
              <div className="bar bar-2"></div>
              <div className="bar bar-3"></div>
              <div className="bar bar-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
