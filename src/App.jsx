import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import HeroCreator from './components/Hero/variants/HeroCreator';
import HeroGlobal from './components/Hero/variants/HeroGlobal';
import HeroMedia from './components/Hero/variants/HeroMedia';
import HeroFinal from './components/Hero/variants/HeroFinal';

import './styles/global.css';

function App() {
  const [heroVariant, setHeroVariant] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setHeroVariant(params.get('hero'));
  }, []);

  // Temporary development-only switcher logic
  if (heroVariant === 'creator') {
    return (
      <div className="app">
        <main><HeroCreator /></main>
      </div>
    );
  }
  
  if (heroVariant === 'global') {
    return (
      <div className="app">
        <main><HeroGlobal /></main>
      </div>
    );
  }
  
  if (heroVariant === 'media') {
    return (
      <div className="app">
        <main><HeroMedia /></main>
      </div>
    );
  }

  if (heroVariant === 'final') {
    return (
      <div className="app">
        <main><HeroFinal /></main>
      </div>
    );
  }

  // Default original layout
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
