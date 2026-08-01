import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Programs from './components/Programs/Programs';
import Journey from './components/Journey/Journey';
import YouTube from './components/YouTube/YouTube';
import FAQ from './components/FAQ/FAQ';

import './styles/global.css';

function App() {
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
      </main>
    </div>
  );
}

export default App;
