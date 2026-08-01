import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-card glass-card">
          <div className="contact-header">
            <h2>Ready to Launch Your Channel?</h2>
            <p>Join the next cohort of creators and build your YouTube empire.</p>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required className="contact-input" />
            <input type="email" placeholder="Your Email Address" required className="contact-input" />
            <button type="submit" className="btn-primary">Get Started Now</button>
          </form>
        </div>
      </div>
    </section>
  );
}
