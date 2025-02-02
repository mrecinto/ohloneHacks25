import React from "react";
import "./about.css";


const AboutUs = () => {
  
  return (
    <div className="about-us-container">
      <div className="main-section">
        <div className="image-building">
          <img src="/src/components/about/building.png" alt="Building" />
        </div>
        <div className="about-text">
        <h2>
        <span className="letter">A</span>
        <span className="letter">b</span>
        <span className="letter">o</span>
        <span className="letter">u</span>
        <span className="letter">t</span>
        <span className="letter"> </span>
        <span className="letter">U</span>
        <span className="letter">s</span>
        </h2>
          <p>
          <b class="highlight">OhloneHacks</b> is a vibrant community where creativity meets technology. We provide a welcoming space for individuals of all skill levels to <b class="highlight">collaborate,</b> <b class="highlight">learn,</b> and <b class="highlight">innovate</b> through hackathons and tech projects. Our goal is to empower participants to explore their potential, while fostering <b class="highlight">teamwork</b> and <b class="highlight">problem-solving</b>. Whether you're new to tech or a seasoned pro, OhloneHacks is where you can grow and make an impact.
          </p>
        </div>
      </div>

      <div className="info-section">
        <div className="left-info">
          <p>
            <span className="word">Beginner-friendly</span>
            <span className="word">Collaborative</span>
            <span className="word">Innovative solutions</span>
          </p>
        </div>

        <div className="right-image">
          <img src="/src/components/about/hill.png" alt="Hill" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;