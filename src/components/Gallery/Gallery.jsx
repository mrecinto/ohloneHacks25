import React, { useState } from 'react';
import './gallery.css';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://via.placeholder.com/800x400/FF5733/FFFFFF?text=Image+1",
    "https://via.placeholder.com/800x400/33FF57/FFFFFF?text=Image+2",
    "https://via.placeholder.com/800x400/5733FF/FFFFFF?text=Image+3",
    "https://via.placeholder.com/800x400/FF33A1/FFFFFF?text=Image+4",
    "https://via.placeholder.com/800x400/FF33A1/FFFFFF?text=Image+5",
    "https://via.placeholder.com/800x400/FF33A1/FFFFFF?text=Image+6",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery">
      <div className="gallery-container">
        <h2 className="gallery-title">Gallery</h2>
        <div className="gallery-slides">
          <div className="gallery-slide">
            <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
          </div>
        </div>

        {/* Slide Navigation Buttons */}
        <div className="nav-buttons">
          <button className="prev" onClick={prevSlide}>Prev</button>
          <button className="next" onClick={nextSlide}>Next</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
