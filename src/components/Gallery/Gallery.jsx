import React from 'react';
import './Gallery.css';

export default function Gallery() {
  const images = [
    { title: 'Studio Setup', category: 'Production' },
    { title: 'Live Workshops', category: 'Community' },
    { title: 'Editing Suite', category: 'Post-Production' },
    { title: 'Creator Meetups', category: 'Networking' }
  ];

  return (
    <section className="gallery-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Behind The Scenes</h2>
          <p className="section-subtitle">Inside our creative hub & workshops.</p>
        </div>
        <div className="gallery-grid">
          {images.map((img, i) => (
            <div key={i} className="gallery-item glass-card">
              <div className="gallery-placeholder">
                <span className="gallery-cat">{img.category}</span>
                <h4>{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
