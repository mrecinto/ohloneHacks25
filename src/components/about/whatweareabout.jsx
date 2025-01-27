import React from 'react';
import './WhatWeAreAbout.css';

const WhatWeAreAbout = () => {
  return (
    <div className="about-we">
        <h1>What We're All About</h1>
      <div className="about-boxes">
        <div className="about-box">
          <h3>Collaboration</h3>
          <p>We bring together talented individuals to create innovative solutions.</p>
        </div>
        <div className="about-box">
          <h3>Innovation</h3>
          <p>We push the boundaries of technology to solve real-world problems.</p>
        </div>
        <div className="about-box">
          <h3>Creativity</h3>
          <p>We encourage thinking outside the box to develop impactful projects.</p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeAreAbout;
