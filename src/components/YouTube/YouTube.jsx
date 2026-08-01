import React from 'react';
import './YouTube.css';

export default function YouTube() {
  return (
    <section className="youtube-section">
      <div className="container youtube-container glass-card">
        <div className="yt-badge">Featured Content</div>
        <h2>Explore Our Free YouTube Masterclasses</h2>
        <p>Subscribe to our official channel for weekly algorithm deep dives and editing breakdowns.</p>
        <button className="btn-primary">Visit YouTube Channel</button>
      </div>
    </section>
  );
}
