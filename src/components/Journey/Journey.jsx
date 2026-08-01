import React from 'react';
import './Journey.css';

export default function Journey() {
  const steps = [
    { step: '01', title: 'Niche Discovery', desc: 'Identify high-demand, low-competition sub-niches.' },
    { step: '02', title: 'Content Architecture', desc: 'Craft high-retention hooks and story frameworks.' },
    { step: '03', title: 'Production Mastery', desc: 'Optimize recording, voiceover, and editing pipelines.' },
    { step: '04', title: 'Algorithmic Scale', desc: 'Leverage SEO, A/B thumbnails, and audience analytics.' }
  ];

  return (
    <section id="journey" className="journey-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">The 4-Step Success Framework</h2>
          <p className="section-subtitle">A proven methodology designed to turn viewers into loyal subscribers.</p>
        </div>
        <div className="journey-grid">
          {steps.map((s, i) => (
            <div key={i} className="journey-card glass-card">
              <span className="journey-step">{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
