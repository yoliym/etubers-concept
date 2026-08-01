import React from 'react';
import './Journey.css';

const Journey = () => {
  return (
    <section className="journey-section reveal-section" id="journey">
      <div className="journey-container">
        
        {/* Header Block */}
        <div className="journey-header">
          <div className="journey-header-meta reveal-el delay-1">
            <span className="journey-eyebrow">FROM LEARNING TO EXECUTION</span>
            <span className="journey-brand">TALK LESS. DO MORE.</span>
          </div>
          <h2 className="journey-heading reveal-el delay-2">Knowledge Means More When You Use It.</h2>
          <p className="journey-intro reveal-el delay-3">
            Etubers is designed to move people beyond passive watching—from understanding a skill to practicing it and putting it into action.
          </p>
        </div>

        {/* Process Path */}
        <div className="journey-path">
          <div className="journey-line">
            <div className="journey-line-fill anim-grow-line"></div>
          </div>
          
          <div className="journey-steps">
            
            {/* Step 1 */}
            <div className="journey-step anim-fade-in-1">
              <div className="step-marker">
                <div className="marker-dot"></div>
              </div>
              <div className="step-content">
                <span className="step-number">01</span>
                <h3 className="step-label">LEARN</h3>
                <p className="step-description">
                  Access practical lessons and free resources that simplify useful digital skills.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="journey-step anim-fade-in-2">
              <div className="step-marker">
                <div className="marker-dot"></div>
              </div>
              <div className="step-content">
                <span className="step-number">02</span>
                <h3 className="step-label">BUILD</h3>
                <p className="step-description">
                  Practice through projects, guided tasks and focused skill development.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="journey-step anim-fade-in-3">
              <div className="step-marker">
                <div className="marker-dot"></div>
              </div>
              <div className="step-content">
                <span className="step-number">03</span>
                <h3 className="step-label">EXECUTE</h3>
                <p className="step-description">
                  Apply what you learn through freelancing, business and real-world opportunities.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Journey;
