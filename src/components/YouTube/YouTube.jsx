import React from 'react';
import './YouTube.css';

const youtubeData = {
  featured: {
    id: 'featured',
    category: 'Digital Marketing',
    title: 'Digital Marketing Full Course',
    description: 'Master the fundamentals of digital marketing and learn how to build high-converting campaigns from scratch.',
    url: 'https://www.youtube.com/watch?v=9s_QNbQqFKY',
    image: '/images/etubers/thumbnails/digital-marketing-course.jpg'
  },
  supporting: [
    {
      id: 'sup1',
      category: 'Video Editing',
      title: 'Video Editing Full Course',
      url: 'https://www.youtube.com/watch?v=NgrXxAPxmEY',
      image: '/images/etubers/thumbnails/video-editing-course.jpg'
    },
    {
      id: 'sup2',
      category: 'Personal Development',
      title: 'Creator / Personal Development Video',
      url: 'https://www.youtube.com/watch?v=HvKmARdPpGg',
      image: '/images/etubers/thumbnails/creator-reference-01.jpg'
    },
    {
      id: 'sup3',
      category: 'Online Business',
      title: 'Online Business / Return Video',
      url: 'https://www.youtube.com/watch?v=h5U8GMrKwA4',
      image: '/images/etubers/thumbnails/creator-reference-02.jpg'
    }
  ]
};

const YouTube = () => {
  return (
    <section className="yt-section" id="resources">
      <div className="yt-container">
        
        {/* Header */}
        <div className="yt-header">
          <div className="yt-header-text">
            <span className="yt-eyebrow">LEARN FOR FREE</span>
            <h2 className="yt-heading">Start Before You Feel Ready.</h2>
            <p className="yt-intro">
              Explore practical lessons from Etubers and begin developing useful digital skills at your own pace.
            </p>
          </div>
          <div className="yt-header-action">
            <a 
              href="https://www.youtube.com/@etubers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="yt-primary-btn"
            >
              Visit the YouTube Channel
            </a>
          </div>
        </div>

        {/* Media Showcase */}
        <div className="yt-showcase-grid">
          
          {/* Featured (Left) */}
          <div className="yt-featured">
            <a href={youtubeData.featured.url} target="_blank" rel="noopener noreferrer" className="yt-video-link">
              <div className="yt-thumbnail-wrapper">
                <img src={youtubeData.featured.image} alt={youtubeData.featured.title} className="yt-thumbnail" />
                <div className="yt-play-overlay">
                  <div className="yt-play-icon">&#9658;</div>
                </div>
              </div>
              <div className="yt-video-meta">
                <span className="yt-category">{youtubeData.featured.category}</span>
                <h3 className="yt-title">{youtubeData.featured.title}</h3>
                <p className="yt-description">{youtubeData.featured.description}</p>
                <span className="yt-watch-action">Watch Now <span className="yt-arrow">&rarr;</span></span>
              </div>
            </a>
          </div>

          {/* Supporting (Right) */}
          <div className="yt-supporting-list">
            {youtubeData.supporting.map((video) => (
              <a href={video.url} target="_blank" rel="noopener noreferrer" className="yt-video-link yt-compact-link" key={video.id}>
                <div className="yt-compact-thumbnail-wrapper">
                  <img src={video.image} alt={video.title} className="yt-thumbnail" />
                  <div className="yt-play-overlay">
                    <div className="yt-play-icon small">&#9658;</div>
                  </div>
                </div>
                <div className="yt-compact-meta">
                  <span className="yt-category">{video.category}</span>
                  <h4 className="yt-compact-title">{video.title}</h4>
                  <span className="yt-watch-action">Watch <span className="yt-arrow">&rarr;</span></span>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default YouTube;
