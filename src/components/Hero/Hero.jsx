import React, { useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="hero">
      <div className="container hero-layout">
        
        <div className="hero-content">
          <div className="hero-eyebrow mono anim-eyebrow">
            <span className="accent-line"></span>
            ETHIOPIAN KNOWLEDGE. GLOBAL EXECUTION.
          </div>
          
          <h1 className="hero-title anim-headline">
            Engineer Your<br />Digital Future.
          </h1>
          
          <p className="hero-desc anim-body">
            Build practical skills, enter global markets and move from learning to execution with Etubers.
          </p>
          
          <div className="hero-ctas anim-ctas">
            <a href="https://www.youtube.com/@etubers" target="_blank" rel="noopener noreferrer" className="btn-primary">Explore Free Courses</a>
            <a href="https://upwork.etubers.org/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Join the Mentorship</a>
          </div>
          
          <p className="hero-credibility mono anim-ctas">
            Practical education in freelancing, digital business and financial literacy.
          </p>
          
          {/* Brand Mechanism: LEARN -> BUILD -> EARN */}
          <div className="mechanism-track anim-mechanism">
            <div className="mech-stage anim-mech-1">
              <span className="mech-label">LEARN</span>
            </div>
            <div className="mech-connector">
              <div className="mech-connector-fill anim-line-1"></div>
            </div>
            
            <div className="mech-stage anim-mech-2">
              <span className="mech-label">BUILD</span>
            </div>
            <div className="mech-connector">
              <div className="mech-connector-fill anim-line-2"></div>
            </div>
            
            <div className="mech-stage final-stage anim-mech-3">
              <span className="mech-label highlight">EARN</span>
              <span className="mech-pulse-dot"></span>
            </div>
          </div>
        </div>

        <div className="hero-visual anim-portrait">
          {/* Oversized background typography */}
          <div className="bg-typography">EXECUTE</div>
          
          {/* Subtle coordinate/grid structure */}
          <div className="grid-structure">
            <div className="grid-line gl-h1"></div>
            <div className="grid-line gl-h2"></div>
            <div className="grid-line gl-v1"></div>
            <div className="grid-line gl-v2"></div>
          </div>
          
          <div className="portrait-container">
            {/* Small editorial labels */}
            <div className="geo-label gl-top mono">EDUCATION</div>
            <div className="geo-label gl-right mono">DISCIPLINE</div>
            <div className="geo-label gl-bottom mono">EXECUTION</div>
            
            {/* The portrait */}
            <div className="portrait-wrapper">
              <img 
                src={`${import.meta.env.BASE_URL}images/etubers/thumbnails/digital-marketing-course.jpg`} 
                alt="Mikiyas Mulugeta" 
                className={`portrait-img ${imageError ? 'hidden' : ''}`}
                onError={() => setImageError(true)}
              />
              
              {/* Intentional placeholder if image is missing */}
              {imageError && (
                <div className="portrait-placeholder">
                  <div className="placeholder-pattern"></div>
                  <span className="placeholder-label mono" style={{ fontSize: '3rem', opacity: 0.1, transform: 'rotate(-90deg)' }}>ETUBERS</span>
                </div>
              )}
            </div>
            
            {/* Controlled orange execution line */}
            <div className="execution-line"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
