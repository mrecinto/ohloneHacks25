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
          <b class="highlight">OhloneHacks</b> is more than just a tech community - it's the first community college 
          hackathon in the Bay Area, bringing together over 100 hackers from diverse backgrounds. 
          We believe in <b class="highlight">empowering </b> students to <b class="highlight"> explore </b> technology, <b class="highlight"> collaborate </b>
          on impactful projects, and <b class="highlight"> build </b> real solutions while <b class="highlight">networking</b> with industry professionals.
          </p>
        </div>
      </div>

      <div className="info-section">
        <div className="left-info">
          <p>
            <span className="word">Collaborative</span>
            <span className="word">Innovative Solutions</span>
            <span className="word">Network</span>
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