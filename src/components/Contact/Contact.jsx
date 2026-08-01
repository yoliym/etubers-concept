import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        
        {/* Background typographic element */}
        <div className="cta-bg-text" aria-hidden="true">BUILD</div>
        
        <div className="cta-content">
          <span className="cta-eyebrow">YOUR NEXT STEP</span>
          <h2 className="cta-heading">Stop Waiting.<br/>Start Building.</h2>
          <p className="cta-intro">
            Begin with practical free lessons or explore guided mentorship designed to help you move from learning to execution.
          </p>
          
          <div className="cta-actions">
            <a 
              href="https://www.youtube.com/@etubers" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-btn primary"
            >
              Start Learning Free
            </a>
            <a 
              href="https://upwork.etubers.org/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-btn secondary"
            >
              Explore Mentorship
            </a>
          </div>

          <div className="cta-brand-signature">TALK LESS. DO MORE.</div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
