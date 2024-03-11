import React from 'react';
import './HeroSection.css'; 
import backgroundImage from '/home/mica/micah_portfolio/src/assets/pexels-daniel-putzer-633409.jpg';

const HeroSection = () => {
  return (
    <div className="hero-section" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm <span>Micah Barasa</span>, a <span>Backend Software Developer</span> based in <span>Kenya</span>.</p>
        <p>I specialize in building scalable <span>backend systems</span> and <span>APIs</span>.</p>
        <button>Contact Me</button>
      </div>
    </div>
  );
};

export default HeroSection;
