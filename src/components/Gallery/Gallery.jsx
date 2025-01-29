import React from 'react';
import './gallery.css';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-slides">
        {/* Example placeholder images */}
        <div className="gallery-slide">
          <img src="https://via.placeholder.com/800x400/FF5733/FFFFFF?text=Image+1" alt="Image 1" />
        </div>
        <div className="gallery-slide">
          <img src="https://via.placeholder.com/800x400/33FF57/FFFFFF?text=Image+2" alt="Image 2" />
        </div>
        <div className="gallery-slide">
          <img src="https://via.placeholder.com/800x400/5733FF/FFFFFF?text=Image+3" alt="Image 3" />
        </div>
        <div className="gallery-slide">
          <img src="https://via.placeholder.com/800x400/FF33A1/FFFFFF?text=Image+4" alt="Image 4" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
