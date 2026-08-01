import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Section Number & Branding */}
        <div className="about-header-meta">
          <span className="about-number">01</span>
          <div className="about-line-accent"></div>
          <span className="about-brand-statement">TALK LESS. DO MORE.</span>
        </div>

        <div className="about-content-grid">
          
          {/* Text Content */}
          <div className="about-text-column">
            <h2 className="about-heading">Education Built for Action.</h2>
            <p className="about-intro">
              Etubers turns complex digital topics into practical lessons, free resources and guided mentorship designed to help people move from learning to execution.
            </p>
            
            <div className="about-principles">
              <div className="principle-item">
                <div className="principle-bullet"></div>
                <h3 className="principle-title">LEARN PRACTICALLY</h3>
              </div>
              <div className="principle-item">
                <div className="principle-bullet"></div>
                <h3 className="principle-title">BUILD WITH DISCIPLINE</h3>
              </div>
              <div className="principle-item">
                <div className="principle-bullet"></div>
                <h3 className="principle-title">EXECUTE GLOBALLY</h3>
              </div>
            </div>
          </div>

          {/* Visual & Authority Content */}
          <div className="about-visual-column">
            <div className="about-image-wrapper">
              <img 
                src="/images/etubers/thumbnails/facebook-ads-course.jpg" 
                alt="Mikiyas - Etubers" 
                className={`about-portrait ${imgError ? 'hidden' : ''}`}
                onError={() => setImgError(true)}
              />
              {imgError && (
                <div className="about-portrait-placeholder">
                  <div className="about-fallback-lines"></div>
                  <span className="about-fallback-text">ETUBERS</span>
                </div>
              )}
              
              {/* Authority Block */}
              <div className="about-authority-block">
                <span className="auth-name">Mikiyas</span>
                <span className="auth-roles">Educator &bull; Creator &bull; Entrepreneur &bull; Mentor</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
