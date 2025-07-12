import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>How Much Could You Save?</h1>
        <p>
          Answer the questions below to get a free, quick quote for us to take your accountancy hassles away.
        </p>
        <div className="cta-box">
          <p className="question">Is your turnover expected to be more than £85k?</p>
          <div className="cta-buttons">
            <button className="yes">Yes</button>
            <button className="no">No</button>
          </div>
          <small>Takes less than 30 seconds</small>
        </div>
      </div>
    </section>
  );
};

export default Hero;
