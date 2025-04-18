import { useState, useEffect, useRef } from "react";

const images = [
  "/2025Images/101_0446.JPG",
  "/2025 Images/_MGL0408_1.jpg",
  "2025Images/_MGL0403_1.jpg",
  "/2025Images/_MGL0405_1.jpg",
  "/2025Images/_MGL0459_1.jpg",
  "/2025Images/_MGL0484_1.jpg",
  "/2025Images/_MGL0489_1.jpg",
  "/2025Images/_MGL0492_1.jpg",
  "/2025 Images/_MGL0444_1.jpg",
  "/2025 Images/_MGL0461_1.jpg",
  "/2025 Images/_MGL0472_1.jpg",
  "/2025Images/_MGL0496_1.jpg",
  "/2025Images/_MGL0541_1.jpg",
  "/2025Images/_MGL0548_1.jpg",
  "/2025Images/_MGL0568_1.jpg",
  "/2025Images/_MGL0394_1.jpg",
  "/2025Images/101_0479.JPG",
  "/2025Images/IMG_0071.JPG",
  "/2025Images/_MGL0572_1.jpg",
  "/2025Images/3AQ72751.jpg",
  "/2025 Images/PHOTO-2025-02-24-21-08-25.jpg",
  "/2025Images/3AQ72781.jpg",
  "/2025Images/PHOTO-2025-02-24-21-09-14.jpg",
  "/2025Images/3AQ72801.jpg",
  "/2025Images/PHOTO-2025-02-24-21-08-17.jpg",
];

// Duplicate first and last images for seamless looping
const loopImages = [images[images.length - 1], ...images, images[0]];

export default function Slideshow() {
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const moveX = useRef(0);
  const autoSlideIntervalRef = useRef(null);
  const totalSlides = images.length;

  // ---- AUTO SLIDE ----
  useEffect(() => {
    startAutoSlide();
    document.addEventListener("click", handleClickOutside);
    return () => {
      clearInterval(autoSlideIntervalRef.current);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const startAutoSlide = () => {
    clearInterval(autoSlideIntervalRef.current);
    autoSlideIntervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000);
  };

  // ---- NAVIGATION ----
  const nextSlide = () => {
    setTransition(true);
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setTransition(true);
    setIndex((prev) => prev - 1);
  };

  // ---- LOOPING LOGIC ----
  const handleTransitionEnd = () => {
    if (index === totalSlides + 1) {
      requestAnimationFrame(() => {
        setTransition(false);
        setIndex(1);
      });
    } else if (index === 0) {
      requestAnimationFrame(() => {
        setTransition(false);
        setIndex(totalSlides);
      });
    }
    setTransition(true);
  };

  // ---- DRAG HANDLERS ----
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    moveX.current = 0;
    clearInterval(autoSlideIntervalRef.current); // Pause auto-slide while dragging
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    moveX.current = e.clientX - startX.current;

    if (moveX.current < -50) {
      nextSlide();
      isDragging.current = false;
    } else if (moveX.current > 50) {
      prevSlide();
      isDragging.current = false;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (index < 1) setIndex(1);
    if (index > totalSlides) setIndex(totalSlides);
    startAutoSlide(); // Resume auto-slide
  };

  // Prevents the slideshow from turning black when clicking outside
  const handleClickOutside = (e) => {
    if (!e.target.closest(".slideshow-container")) {
      setIndex(1); // Reset index to prevent black screen
      startAutoSlide();
    }
  };

  return (
    <section
      style={{
        backgroundColor: "#171031",
        padding: "40px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "0px",
        minHeight: "unset",
      }}
    >
      {/* Section Title */}
      <h2
        style={{
          fontSize: "2.8rem",
          marginBottom: "30px",
          color: "rgba(255, 255, 255, 0.85)",
          textAlign: "center",
        }}
      >
        OhloneHacks 5.0
      </h2>

      {/* Slideshow Container */}
      <div
        className="slideshow-container"
        style={{
          width: "100%",
          maxWidth: "950px",
          aspectRatio: "16/9",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          cursor: "grab",
          borderRadius: "20px",
          backgroundColor: "#000",
          marginBottom: "0px",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={(e) => handleMouseDown(e.touches[0])}
        onTouchMove={(e) => handleMouseMove(e.touches[0])}
        onTouchEnd={handleMouseUp}
      >
        <div
          className="slideshow"
          style={{
            display: "flex",
            transition: transition ? "transform 0.8s ease-in-out" : "none",
            transform: `translateX(-${index * 100}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {loopImages.map((src, i) => (
            <div
              key={i}
              style={{
                width: "100%",
                flexShrink: 0,
                overflow: "hidden",
              }}
            >
              {/* lazy-loading attribute added */}
              <img
                src={src}
                alt={`Slide ${i}`}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Global Styles */}
      <style jsx>{`
        #faq {
          margin-top: 0 !important;
          padding-top: 0 !important;
        }

        .gallery-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0px;
          margin-bottom: 0px;
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
