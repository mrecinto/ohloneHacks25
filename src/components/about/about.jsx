import React from "react";
import "./about.css";
import ombreBackground from './ombrebackground.jpg';


const AboutMe = () => {
  const sectionStyle = {
    backgroundImage: `url(${ombreBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };
  return (
    
    <div className="about-container">
      <h1 className="about-header">Hello, we're OhloneHacks</h1>
      <p className="about-content">
        Join our hackathon <br />for collaboration, innovation, creativity, and skill-building!
      </p>
      <div className="clouds"></div>

    </div>
    
  );
};

export default AboutMe;