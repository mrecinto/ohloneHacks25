import React, { useRef, useState, useEffect } from "react";
import "./Gallery.css";

const images = [
  "/2024images/IMG_4023.png",
  "/2024images/IMG_4026.png",
  "/2024images/IMG_4085.png",
  "/2024images/IMG_4291.png",
  "/2024images/IMG_4298.png",
  "/2024images/IMG_4307.png",
];

const Gallery = () => {
  const sliderRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const prevTranslateX = useRef(0);
  const translateX = useRef(0);
  const velocityRef = useRef(0);
  const autoSlideRef = useRef(null);

  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    startXRef.current = e.pageX || e.touches[0].pageX;
    prevTranslateX.current = translateX.current;
    velocityRef.current = 0;
    clearInterval(autoSlideRef.current); // Stop auto-slide while dragging
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();

    const currentX = e.pageX || e.touches[0].pageX;
    const deltaX = currentX - startXRef.current;
    translateX.current = prevTranslateX.current + deltaX;

    sliderRef.current.style.transform = `translate3d(${translateX.current}px, 0, 0)`;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    startAutoSlide(); // Resume auto-slide after dragging
  };

  const startAutoSlide = () => {
    clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      translateX.current -= 320; // Move left by one image
      sliderRef.current.style.transform = `translate3d(${translateX.current}px, 0, 0)`;

      if (translateX.current <= -sliderRef.current.scrollWidth + sliderRef.current.clientWidth) {
        translateX.current = 0;
        sliderRef.current.style.transform = `translate3d(${translateX.current}px, 0, 0)`;
      }
    }, 2000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(autoSlideRef.current);
  }, []);

  return (
    <div className="gallery-wrapper">
      <div
        className="gallery-container"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      >
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Gallery Image ${index + 1}`} loading="lazy" draggable="false" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
