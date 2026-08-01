import React from 'react';
import './Programs.css';

const programsData = [
  {
    id: 1,
    category: 'Digital Marketing',
    title: 'Digital Marketing Full Course',
    description: 'Master the fundamentals of digital marketing and learn how to build high-converting campaigns from scratch.',
    action: 'Explore Course',
    image: '/images/etubers/thumbnails/digital-marketing-course.jpg'
  },
  {
    id: 2,
    category: 'Video Editing',
    title: 'Professional Video Editing',
    description: 'Learn industry-standard tools to edit compelling videos for YouTube and clients.',
    action: 'Watch Free',
    image: '/images/etubers/thumbnails/video-editing-course.jpg'
  },
  {
    id: 3,
    category: 'Agency',
    title: 'Social Media Agency',
    description: 'Start and scale a profitable social media marketing agency with practical execution steps.',
    action: 'View Program',
    image: '/images/etubers/thumbnails/social-media-agency.jpg'
  },
  {
    id: 4,
    category: 'Advertising',
    title: 'Facebook Ads Mastery',
    description: 'Run profitable paid campaigns with high ROI.',
    action: 'Learn More',
    image: '/images/etubers/thumbnails/facebook-ads-course.jpg'
  },
  {
    id: 5,
    category: 'Guidance',
    title: '1-on-1 Mentorship',
    description: 'Direct guidance to accelerate your digital career.',
    action: 'Explore Mentorship',
    image: '/images/etubers/thumbnails/creator-reference-01.jpg'
  },
  {
    id: 6,
    category: 'Strategy',
    title: 'Business & Execution',
    description: 'Develop the mindset and systems for global business.',
    action: 'Learn More',
    image: '/images/etubers/thumbnails/creator-reference-02.jpg'
  }
];

const Programs = () => {
  return (
    <section className="programs-section" id="programs">
      <div className="programs-container">
        
        <div className="programs-header">
          <span className="programs-eyebrow">PRACTICAL LEARNING PATHS</span>
          <h2 className="programs-heading">Skills You Can Put to Work.</h2>
          <p className="programs-intro">
            Explore practical courses and mentorship designed to help you learn useful digital skills and apply them in the real world.
          </p>
        </div>

        <div className="programs-grid">
          {programsData.map((item) => (
            <div className="program-card" key={item.id}>
              <a href="#" className="program-link" onClick={(e) => e.preventDefault()}>
                <div className="program-image-wrapper">
                  <img src={item.image} alt={item.title} className="program-image" loading="lazy" />
                  <div className="program-image-overlay"></div>
                </div>
                <div className="program-content">
                  <span className="program-category">{item.category}</span>
                  <h3 className="program-title">{item.title}</h3>
                  <p className="program-description">{item.description}</p>
                  <div className="program-action">
                    <span>{item.action}</span>
                    <div className="action-arrow">&rarr;</div>
                    {/* fallback line removed to keep the single visual style */}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Programs;
