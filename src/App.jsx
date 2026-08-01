import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Programs from './components/Programs/Programs';
import Journey from './components/Journey/Journey';
import YouTube from './components/YouTube/YouTube';

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
      </main>
    </div>
  );
}

export default App;
