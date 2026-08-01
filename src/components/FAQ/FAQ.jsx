import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    id: 'faq-1',
    question: 'Are the Etubers courses free?',
    answer: 'Many practical lessons and full courses are available through the official Etubers YouTube channel.'
  },
  {
    id: 'faq-2',
    question: 'Who is Etubers for?',
    answer: 'People who want to develop practical digital, freelancing, marketing and business skills.'
  },
  {
    id: 'faq-3',
    question: 'Do I need previous experience?',
    answer: 'Many resources are designed to help learners begin with foundational concepts, although requirements may differ by topic or mentorship program.'
  },
  {
    id: 'faq-4',
    question: 'What is the difference between the free content and mentorship?',
    answer: 'Free content supports independent learning, while mentorship focuses on guidance, practical tasks and more direct support.'
  },
  {
    id: 'faq-5',
    question: 'Can I learn at my own pace?',
    answer: 'YouTube resources can be accessed independently. Structured mentorship may follow its own schedule.'
  },
  {
    id: 'faq-6',
    question: 'How can I join a mentorship program?',
    answer: 'Visitors should check the official Etubers mentorship platform or announcements for current availability.'
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        
        <div className="faq-header">
          <span className="faq-eyebrow">QUESTIONS, ANSWERED</span>
          <h2 className="faq-heading">Start with Clarity.</h2>
          <p className="faq-intro">
            Find quick answers about free learning, mentorship and how to begin with Etubers.
          </p>
        </div>

        <div className="faq-accordion-container">
          {faqData.map((item, index) => {
            const isOpen = openId === item.id;
            const itemNumber = String(index + 1).padStart(2, '0');
            const panelId = `panel-${item.id}`;
            const headerId = `header-${item.id}`;

            return (
              <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.id}>
                <h3 className="faq-item-header">
                  <button
                    id={headerId}
                    className="faq-button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleAccordion(item.id)}
                  >
                    <span className="faq-number">{itemNumber}</span>
                    <span className="faq-question-text">{item.question}</span>
                    <span className="faq-icon" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  className="faq-panel"
                  role="region"
                  aria-labelledby={headerId}
                >
                  <div className="faq-panel-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
