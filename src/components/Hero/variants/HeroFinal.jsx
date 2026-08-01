import React, { useState } from 'react';
import './HeroFinal.css';

const FinalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="hf-navbar">
      <div className="hf-nav-container">
        <a href="/" className="hf-brand">
          <span className="hf-brand-dot"></span>
          ETUBERS
        </a>
        <div className="hf-nav-desktop">
          <a href="#learn">Learn</a>
          <a href="#programs">Programs</a>
          <a href="#stories">Success Stories</a>
          <a href="#about">About</a>
          <button className="hf-btn-nav">Start Learning</button>
        </div>
        <button className="hf-mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          <span className={`hf-bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`hf-bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`hf-bar ${isOpen ? 'open' : ''}`}></span>
        </button>
      </div>
      <div className={`hf-mobile-menu ${isOpen ? 'active' : ''}`}>
        <a href="#learn">Learn</a>
        <a href="#programs">Programs</a>
        <a href="#stories">Success Stories</a>
        <a href="#about">About</a>
        <button className="hf-btn-nav mobile-nav-cta">Start Learning</button>
      </div>
    </nav>
  );
};

export default function HeroFinal() {
  const [portraitError, setPortraitError] = useState(false);
  const [img1Error, setImg1Error] = useState(false);
  const [img2Error, setImg2Error] = useState(false);
  const [img3Error, setImg3Error] = useState(false);

  return (
    <div className="hero-final">
      <FinalNavbar />
      
      {/* Background Texture & Color Blocks */}
      <div className="hf-bg-elements">
        <div className="hf-color-block-main"></div>
        <div className="hf-color-block-accent"></div>
        <div className="hf-noise"></div>
      </div>

      <div className="hf-container">
        
        {/* Left / Center Content */}
        <div className="hf-content">
          <div className="hf-signature anim-strike">
            <span className="hf-sig-text">TALK LESS. DO MORE.</span>
            <div className="hf-sig-line"></div>
          </div>
          
          <h1 className="hf-headline">
            <span className="hf-hl-line anim-hl-1">DON’T JUST WATCH.</span><br />
            <span className="hf-hl-line hf-hl-accent anim-hl-2">BUILD SOMETHING.</span>
          </h1>
          
          <p className="hf-copy anim-rise-delay">
            Free practical education and hands-on mentorship for people ready to turn digital skills into real opportunities.
          </p>
          
          <div className="hf-ctas anim-rise-delay-2">
            <button className="hf-btn-primary">Start Learning Free</button>
            <button className="hf-btn-secondary">Explore Mentorship</button>
          </div>
          
          {/* Topic Strip */}
          <div className="hf-topic-strip anim-fade-delay">
            <span>FREELANCING</span> <span className="hf-dot">/</span>
            <span>DIGITAL BUSINESS</span> <span className="hf-dot">/</span>
            <span>FINANCIAL LITERACY</span> <span className="hf-dot">/</span>
            <span>MARKETING</span> <span className="hf-dot">/</span>
            <span>MENTORSHIP</span>
          </div>
        </div>

        {/* Right / Center-Right Visual Collage */}
        <div className="hf-visual-collage">
          
          {/* Creator Portrait */}
          <div className="hf-creator-wrapper anim-mask">
            <img 
              src="/images/mikiyas-hero.webp" 
              alt="Mikiyas Mulugeta"
              className={`hf-portrait ${portraitError ? 'hidden' : ''}`}
              onError={() => setPortraitError(true)}
            />
            {portraitError && (
              <div className="hf-portrait-fallback">
                <div className="hf-fallback-content">
                  <div className="hf-fb-icon"></div>
                  <span>CREATOR FOCAL POINT</span>
                </div>
              </div>
            )}
            {/* Orange Frame Element */}
            <div className="hf-portrait-frame"></div>
          </div>

          {/* Content Thumbnail 1: Upwork */}
          <div className="hf-thumbnail hf-thumb-1 anim-pop-1">
            <div className="hf-thumb-img-container">
              <img 
                src="/images/content/upwork-course.webp" 
                alt="Upwork Course" 
                className={`hf-thumb-img ${img1Error ? 'hidden' : ''}`}
                onError={() => setImg1Error(true)}
              />
              {img1Error && <div className="hf-thumb-fallback hf-fb-green">UPWORK LESSON</div>}
            </div>
            <div className="hf-thumb-meta">
              <span className="hf-badge">COURSE</span>
              <span className="hf-thumb-title">Freelance Mastery</span>
            </div>
          </div>

          {/* Content Thumbnail 2: Business */}
          <div className="hf-thumbnail hf-thumb-2 anim-pop-2">
            <div className="hf-thumb-img-container">
              <img 
                src="/images/content/business-course.webp" 
                alt="Digital Business" 
                className={`hf-thumb-img ${img2Error ? 'hidden' : ''}`}
                onError={() => setImg2Error(true)}
              />
              {img2Error && <div className="hf-thumb-fallback hf-fb-blue">DIGITAL BUSINESS</div>}
            </div>
            <div className="hf-thumb-meta">
              <span className="hf-badge">BUSINESS</span>
              <span className="hf-thumb-title">Global Systems</span>
            </div>
          </div>

          {/* Content Thumbnail 3: Mentorship */}
          <div className="hf-thumbnail hf-thumb-3 anim-pop-3">
            <div className="hf-thumb-img-container">
              <img 
                src="/images/content/mentorship.webp" 
                alt="Mentorship" 
                className={`hf-thumb-img ${img3Error ? 'hidden' : ''}`}
                onError={() => setImg3Error(true)}
              />
              {img3Error && <div className="hf-thumb-fallback hf-fb-orange">MENTORSHIP</div>}
            </div>
            <div className="hf-thumb-meta">
              <span className="hf-badge hf-badge-accent">MENTORSHIP</span>
              <span className="hf-thumb-title">Live Session</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
