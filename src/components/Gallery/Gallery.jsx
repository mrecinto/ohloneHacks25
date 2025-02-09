<<<<<<< HEAD
import { useState, useEffect } from "react";

const images = [
  "/Images/image1.jpg",
  "/Images/image2.jpg",
  "/Images/image3.jpg",
  "/Images/image4.jpg",
  "/Images/image5.jpg",
  "/Images/image6.jpg",
  "/Images/image7.jpg",
  "/Images/image8.jpg",
  "/Images/image9.jpg",
  "/Images/image10.jpg",
  "/Images/image11.jpg",
  "/Images/image12.jpg",
  "/Images/image13.jpg",
  "/Images/image14.jpg",
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ textAlign: "center", padding: "20px", backgroundColor: "#171031", minHeight: "100vh" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#fff" }}>Gallery</h2>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "auto", backgroundColor: "transparent" }}>
        <div className="slideshow-container" style={{ overflow: "hidden", width: "700px", position: "relative", backgroundColor: "transparent" }}>
          <div
            className="slideshow"
            style={{
              display: "flex",
              transition: "transform 1s ease-in-out",
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {images.map((src, i) => (
              <div key={i} style={{ width: "700px", flexShrink: 0 }}>
                {src.includes('drive.google.com') ? (
                  <iframe
                    src={src}
                    width="700"
                    height="500"
                    allow="autoplay"
                    title={`Slide ${i + 1}`}
                    style={{ border: "none" }}
                  />
                ) : (
                  <img
                    src={src}
                    alt={`Slide ${i + 1}`}
                    style={{ width: "700px", height: "500px" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
=======
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
>>>>>>> About-Us
