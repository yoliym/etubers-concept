import React from 'react';
import { stats } from '../../data/stats';
import './Stats.css';

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        {stats.map((item, index) => (
          <div key={index} className="stat-card glass-card">
            <h3 className="stat-value gradient-text">{item.value}</h3>
            <p className="stat-label">{item.label}</p>
            <span className="stat-change">{item.change}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
