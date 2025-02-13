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
    return () => clearInterval(autoSlideIntervalRef.current);
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

    // If dragging left, move to next slide
    if (moveX.current < -50) {
      nextSlide();
      isDragging.current = false; // Stop further movement until new drag starts
    } 
    // If dragging right, move to previous slide
    else if (moveX.current > 50) {
      prevSlide();
      isDragging.current = false;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    startAutoSlide(); // Resume auto-slide
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
        Gallery
      </h2>

      {/* Slideshow Container */}
      <div
        className="slideshow-container"
        style={{
          overflow: "hidden",
          width: "950px",
          height: "600px",
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
        onTouchStart={(e) => handleMouseDown(e.touches[0])} // Mobile support
        onTouchMove={(e) => handleMouseMove(e.touches[0])}
        onTouchEnd={handleMouseUp}
      >
        <div
          className="slideshow"
          style={{
            display: "flex",
            transition: transition ? "transform 0.8s ease-in-out" : "none",
            transform: `translateX(-${index * 950}px)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {loopImages.map((src, i) => (
            <div
              key={i}
              style={{
                width: "950px",
                height: "600px",
                flexShrink: 0,
                overflow: "hidden",
              }}
            >
              <img
                src={src}
                alt={`Slide ${i}`}
                style={{
                  width: "950px",
                  height: "600px",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Global Styles - Fix FAQ Section */}
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
          .slideshow-container {
            width: 100%;
            height: 400px;
          }

          .slideshow img {
            width: 100%;
            height: auto;
          }

          .slideshow {
            transform: translateX(-${index * 100}vw);
          }

          .slideshow-container {
            cursor: grab;
          }

          .slideshow-container:hover {
            cursor: pointer;
          }

          h2 {
            font-size: 2rem;
          }

          .slideshow {
            transition: none;
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
