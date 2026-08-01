import React from 'react';
import { programs } from '../../data/programs';
import './Programs.css';

export default function Programs() {
  return (
    <section id="programs" className="programs-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Specialized Accelerator Programs</h2>
          <p className="section-subtitle">Tailored tracks designed for every stage of your YouTube journey.</p>
        </div>
        <div className="programs-grid">
          {programs.map((program) => (
            <div key={program.id} className="program-card glass-card">
              {program.highlight && <span className="program-tag">{program.highlight}</span>}
              <div className="program-meta">
                <span>{program.category}</span> • <span>{program.duration}</span>
              </div>
              <h3 className="program-title">{program.title}</h3>
              <p className="program-desc">{program.description}</p>
              <ul className="program-features">
                {program.features.map((feat, idx) => (
                  <li key={idx}>✓ {feat}</li>
                ))}
              </ul>
              <button className="btn-primary full-width">Enroll Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
