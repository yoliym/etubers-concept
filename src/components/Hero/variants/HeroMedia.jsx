import React, { useState } from 'react';
import './HeroMedia.css';

const MediaNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="hm-navbar">
      <div className="hm-nav-container">
        <a href="/" className="hm-brand">ETUBERS</a>
        <div className="hm-nav-desktop">
          <a href="#learn">Learn</a>
          <a href="#programs">Programs</a>
          <a href="#stories">Success Stories</a>
          <a href="#about">About</a>
          <button className="hm-btn-nav">Start Learning</button>
        </div>
        <button className="hm-mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className={`hm-bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`hm-bar ${isOpen ? 'open' : ''}`}></span>
        </button>
      </div>
      <div className={`hm-mobile-menu ${isOpen ? 'active' : ''}`}>
        <a href="#learn">Learn</a>
        <a href="#programs">Programs</a>
        <a href="#stories">Success Stories</a>
        <a href="#about">About</a>
        <button className="hm-btn-nav">Start Learning</button>
      </div>
    </nav>
  );
};

export default function HeroMedia() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="hero-media">
      <MediaNavbar />
      
      <div className="hm-container">
        
        <div className="hm-content">
          <h1 className="hm-headline anim-rise">
            DON’T JUST WATCH.<br />
            <span className="hm-accent">BUILD SOMETHING.</span>
          </h1>
          <p className="hm-copy anim-rise-delay">
            Practical lessons, free resources and mentorship designed to move you from consuming information to taking action.
          </p>
          <div className="hm-ctas anim-rise-delay-2">
            <button className="hm-btn-primary">Watch Free Courses</button>
            <button className="hm-btn-secondary">View Programs</button>
          </div>
        </div>

        <div className="hm-media-wall">
          {/* Central Creator Area */}
          <div className="hm-central-portrait anim-scale-up">
            <img 
              src="/images/mikiyas-hero.webp" 
              alt="Mikiyas Mulugeta"
              className={`hm-img ${imgError ? 'hidden' : ''}`}
              onError={() => setImgError(true)}
            />
            {imgError && (
              <div className="hm-placeholder">
                <span className="hm-mono">PORTRAIT ASSET REQUIRED</span>
              </div>
            )}
          </div>

          {/* Media Cards / Labels */}
          <div className="hm-card hm-c1 anim-float-1">
            <span className="hm-tag">UPWORK</span>
            <div className="hm-card-title">Freelancing Architecture</div>
          </div>
          
          <div className="hm-card hm-c2 anim-float-2">
            <span className="hm-tag">DIGITAL BUSINESS</span>
            <div className="hm-card-title">Global Income Systems</div>
          </div>
          
          <div className="hm-card hm-c3 anim-float-3">
            <span className="hm-tag">FINANCIAL LITERACY</span>
            <div className="hm-card-title">Market Psychology</div>
          </div>
          
          <div className="hm-card hm-c4 anim-float-4">
            <span className="hm-tag">EXECUTION</span>
            <div className="hm-card-title">Talk Less. Do More.</div>
          </div>
        </div>

      </div>
    </div>
  );
}
