import React, { useState } from 'react';
import './HeroCreator.css';

const CreatorNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="hc-navbar">
      <div className="hc-nav-container">
        <a href="/" className="hc-brand">ETUBERS</a>
        <div className="hc-nav-desktop">
          <a href="#learn">Learn</a>
          <a href="#programs">Programs</a>
          <a href="#stories">Success Stories</a>
          <a href="#about">About</a>
          <button className="hc-btn-nav">Start Learning</button>
        </div>
        <button className="hc-mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className={`hc-bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`hc-bar ${isOpen ? 'open' : ''}`}></span>
        </button>
      </div>
      <div className={`hc-mobile-menu ${isOpen ? 'active' : ''}`}>
        <a href="#learn">Learn</a>
        <a href="#programs">Programs</a>
        <a href="#stories">Success Stories</a>
        <a href="#about">About</a>
        <button className="hc-btn-nav">Start Learning</button>
      </div>
    </nav>
  );
};

export default function HeroCreator() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="hero-creator">
      <CreatorNavbar />
      <div className="hc-bg-texture"></div>
      
      <div className="hc-container">
        <div className="hc-content">
          <div className="hc-signature anim-fade">TALK LESS. DO MORE.</div>
          
          <h1 className="hc-headline anim-rise">
            TURN YOUR SKILLS<br />
            INTO <span className="hc-accent">OPPORTUNITY.</span>
          </h1>
          
          <p className="hc-copy anim-rise-delay">
            Free practical education and hands-on mentorship for people ready to build, earn and compete globally.
          </p>
          
          <div className="hc-ctas anim-rise-delay-2">
            <button className="hc-btn-primary">Start Learning Free</button>
            <button className="hc-btn-secondary">Explore Mentorship</button>
          </div>
          
          <div className="hc-strip anim-fade-delay">
            FREELANCING <span className="hc-dot">•</span> BUSINESS <span className="hc-dot">•</span> FINANCE <span className="hc-dot">•</span> MENTORSHIP
          </div>
        </div>

        <div className="hc-visual anim-clip">
          <div className="hc-portrait-wrapper">
            <img 
              src="/images/mikiyas-hero.webp" 
              alt="Mikiyas Mulugeta"
              className={`hc-img ${imgError ? 'hidden' : ''}`}
              onError={() => setImgError(true)}
            />
            {imgError && (
              <div className="hc-placeholder">
                <div className="hc-placeholder-graphic">
                  <div className="hc-circle"></div>
                  <div className="hc-line"></div>
                </div>
                <span>PORTRAIT ASSET REQUIRED</span>
              </div>
            )}
            <div className="hc-graphic-stroke"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
