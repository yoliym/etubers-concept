import React, { useState } from 'react';
import './HeroGlobal.css';

const GlobalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="hg-navbar">
      <div className="hg-nav-container">
        <a href="/" className="hg-brand">ETUBERS</a>
        <div className="hg-nav-desktop">
          <a href="#learn">Learn</a>
          <a href="#programs">Programs</a>
          <a href="#stories">Success Stories</a>
          <a href="#about">About</a>
          <button className="hg-btn-nav">Start Learning</button>
        </div>
        <button className="hg-mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className={`hg-bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`hg-bar ${isOpen ? 'open' : ''}`}></span>
        </button>
      </div>
      <div className={`hg-mobile-menu ${isOpen ? 'active' : ''}`}>
        <a href="#learn">Learn</a>
        <a href="#programs">Programs</a>
        <a href="#stories">Success Stories</a>
        <a href="#about">About</a>
        <button className="hg-btn-nav">Start Learning</button>
      </div>
    </nav>
  );
};

export default function HeroGlobal() {
  return (
    <div className="hero-global">
      <GlobalNavbar />
      
      {/* Background Rhythm */}
      <div className="hg-rhythm">
        <div className="hg-line hg-l1"></div>
        <div className="hg-line hg-l2"></div>
        <div className="hg-line hg-l3"></div>
      </div>

      <div className="hg-container">
        <div className="hg-content">
          <div className="hg-amharic anim-fade">በኢትዮጵያ የተገነባ</div>
          
          <h1 className="hg-headline anim-rise">
            BUILT IN ETHIOPIA.<br/>
            READY FOR THE WORLD.
          </h1>
          
          <p className="hg-copy anim-rise-delay">
            Learn practical digital skills, build with discipline and access opportunities beyond borders.
          </p>
          
          <div className="hg-ctas anim-rise-delay-2">
            <button className="hg-btn-primary">Explore Free Courses</button>
            <button className="hg-btn-secondary">Meet Etubers</button>
          </div>
        </div>

        <div className="hg-mechanism anim-fade-delay">
          <div className="hg-mech-stage">
            <span className="hg-mech-text">LEARN</span>
            <div className="hg-mech-node"></div>
          </div>
          <div className="hg-mech-path hg-anim-path1"></div>
          
          <div className="hg-mech-stage">
            <span className="hg-mech-text">BUILD</span>
            <div className="hg-mech-node"></div>
          </div>
          <div className="hg-mech-path hg-anim-path2"></div>
          
          <div className="hg-mech-stage hg-final">
            <span className="hg-mech-text">EARN</span>
            <div className="hg-mech-node hg-node-active"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
