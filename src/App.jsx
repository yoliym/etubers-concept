import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Programs from './components/Programs/Programs';
import Journey from './components/Journey/Journey';
import YouTube from './components/YouTube/YouTube';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './styles/global.css';

function App() {
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash) {
        const id = window.location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // slight delay ensures the page is painted
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };
    
    // Run on initial mount
    handleHash();
    
    // Listen for hash changes (e.g. browser back/forward)
    window.addEventListener('hashchange', handleHash);

    // Scroll Reveal Observer
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1,
      }
    );

    document.querySelectorAll('.reveal-section').forEach((el) => {
      revealObserver.observe(el);
    });

    return () => {
      window.removeEventListener('hashchange', handleHash);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Journey />
        <YouTube />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
