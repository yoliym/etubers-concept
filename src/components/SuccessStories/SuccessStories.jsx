import React from 'react';
import './SuccessStories.css';

export default function SuccessStories() {
  const stories = [
    { title: '0 to 100k Subscribers in 90 Days', creator: 'Tech Frontier', metrics: '+100K Subs • 4M Views' },
    { title: 'From Hobbyist to Full-Time Studio', creator: 'Creative Mindset', metrics: '+820K Subs • $15k/mo Revenue' }
  ];

  return (
    <section id="stories" className="stories-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Creator Success Stories</h2>
          <p className="section-subtitle">Real results achieved by creators inside the E-Tubers ecosystem.</p>
        </div>
        <div className="stories-grid">
          {stories.map((story, i) => (
            <div key={i} className="story-card glass-card">
              <div className="story-badge">{story.metrics}</div>
              <h3>{story.title}</h3>
              <p className="story-creator">By {story.creator}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
