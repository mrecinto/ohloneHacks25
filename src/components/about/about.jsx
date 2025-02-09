import React from "react";
import "./about.css";
import building from "./building.png"; // Correct import for image
import hill from "./hill.png"; // Correct import for image

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="main-section">
        <div className="image-building">
          <img src={building} alt="Building" />
        </div>
        <div className="about-text">
          <h2>
            {/* If you want to animate the letters individually, uncomment below */}
            {/* <span className="letter">A</span>
            <span className="letter">b</span>
            <span className="letter">o</span>
            <span className="letter">u</span>
            <span className="letter">t</span>
            <span className="letter"> </span>
            <span className="letter">U</span>
            <span className="letter">s</span> */}
          </h2>
          <p>
            <b className="highlight">OhloneHacks</b> is more than just a tech community - it's the first
            community college hackathon in the Bay Area, bringing together over 100 hackers
            from diverse backgrounds. We believe in <b className="highlight">empowering</b> students to{" "}
            <b className="highlight">explore</b> technology, <b className="highlight">collaborate</b> on impactful projects,
            and <b className="highlight">build</b> real solutions while <b className="highlight">networking</b> with industry professionals.
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
          <img src={hill} alt="Hill" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
