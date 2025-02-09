import { useState, useEffect, useRef } from "react";

const images = [
  "/Images/IMG_4023.png",
  "/Images/IMG_4121.png",
  "/Images/IMG_4182.png",
  "/Images/IMG_4202.png",
  "/Images/IMG_4292.png",
  "/Images/IMG_4083.png",
  "/Images/IMG_4301.png",
  "/Images/IMG_4310.png",
  "/Images/IMG_4163.png",
  "/Images/IMG_4193.png",
  "/Images/IMG_4223.png",
  "/Images/IMG_4256.png",
  "/Images/IMG_4158.png",
  "/Images/IMG_4078.png",
];

// Duplicate first and last images for seamless infinite loop
const loopImages = [images[images.length - 1], ...images, images[0]];

export default function Slideshow() {
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const autoSlideIntervalRef = useRef(null);
  const totalSlides = images.length;

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(autoSlideIntervalRef.current);
  }, []);

  const startAutoSlide = () => {
    clearInterval(autoSlideIntervalRef.current);
    autoSlideIntervalRef.current = setInterval(() => {
      setTransition(true);
      setIndex((prev) => prev + 1);
    }, 4000);
  };

  const nextSlide = () => {
    setTransition(true);
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setTransition(true);
    setIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    // If we are at the last image and it's already transitioned, set index to 1 immediately for seamless loop
    if (index === totalSlides + 1) {
      setTransition(false);
      setIndex(1);
    }
    // If we are at the first image, set index to the last image for seamless loop
    else if (index === 0) {
      setTransition(false);
      setIndex(totalSlides);
    }
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    clearInterval(autoSlideIntervalRef.current);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const moveX = e.clientX - startX.current;

    if (moveX > 100) {
      prevSlide();
      isDragging.current = false;
    } else if (moveX < -100) {
      nextSlide();
      isDragging.current = false;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    startAutoSlide();
  };

  const handleWheel = (e) => {
    clearInterval(autoSlideIntervalRef.current);
    if (e.deltaY > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
    setTimeout(startAutoSlide, 500);
  };

  const handleMouseEnter = () => {
    startAutoSlide();
  };

  return (
    <section style={{ textAlign: "center", padding: "20px", backgroundColor: "#171031", minHeight: "100vh" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "rgba(255, 255, 255, 0.85)" }}>
        Gallery
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
        }}
      >
        <div
          className="slideshow-container"
          style={{
            overflow: "hidden",
            width: "850px",
            height: "500px",
            position: "relative",
            display: "flex",
            cursor: "grab",
            borderRadius: "15px",
            backgroundColor: "#000",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseEnter={handleMouseEnter}
          onWheel={handleWheel}
        >
          <div
            className="slideshow"
            style={{
              display: "flex",
              transition: transition ? "transform 0.8s ease-in-out" : "none",
              transform: `translateX(-${index * 850}px)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {loopImages.map((src, i) => (
              <div key={i} style={{ width: "850px", height: "500px", flexShrink: 0, overflow: "hidden" }}>
                <img
                  src={src}
                  alt={`Slide ${i}`}
                  style={{ width: "850px", height: "500px", objectFit: "cover", borderRadius: "15px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
