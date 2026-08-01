import React from 'react';
import { testimonials } from '../../data/testimonials';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Loved by 15,000+ Creators</h2>
          <p className="section-subtitle">Here is what our members have to say about the program.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card glass-card">
              <p className="quote">"{t.quote}"</p>
              <div className="user-info">
                <img src={t.avatar} alt={t.name} className="avatar" />
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.handle} • {t.subscribers}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
