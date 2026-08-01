import React, { useState } from 'react';
import { faq } from '../../data/faq';
import './FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know about E-Tubers.</p>
        </div>
        <div className="faq-list">
          {faq.map((item, i) => (
            <div key={i} className={`faq-item glass-card ${openIndex === i ? 'open' : ''}`} onClick={() => toggle(i)}>
              <div className="faq-question">
                <h4>{item.question}</h4>
                <span className="faq-toggle">{openIndex === i ? '−' : '+'}</span>
              </div>
              {openIndex === i && <p className="faq-answer">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
