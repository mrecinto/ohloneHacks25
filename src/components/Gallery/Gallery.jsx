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
  
  const transitionStyle = {
    display: "flex",
    transition: transition ? "transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)" : "none",
    transform: `translateX(calc(-${index * 950}px - ${index * 10}px))`, // Adds small space between transitions
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

  const handleHoverLeft = () => {
    clearInterval(autoSlideIntervalRef.current);
    prevSlide();
  };

  const handleHoverRight = () => {
    clearInterval(autoSlideIntervalRef.current);
    nextSlide();
  };

  const handleMouseLeave = () => {
    startAutoSlide();
  };

  return (
    <section
      style={{
        backgroundColor: "#171031",
        minHeight: "100vh",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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

      {/* Flex Container for Slideshow */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {/* Left Side - Slideshow */}
        <div
          style={{
            flex: "1.3",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
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
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
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

          {/* Invisible Hover Buttons */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "20%",
              height: "100%",
              cursor: "pointer",
              zIndex: 10,
            }}
            onMouseEnter={handleHoverLeft}
            onMouseLeave={handleMouseLeave}
          ></div>
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "20%",
              height: "100%",
              cursor: "pointer",
              zIndex: 10,
            }}
            onMouseEnter={handleHoverRight}
            onMouseLeave={handleMouseLeave}
          ></div>
        </div>

        {/* Right Side - Ohlone Hacks 4.0 */}
        <div
          style={{
            flex: "1",
            color: "rgba(255, 255, 255, 0.85)",
            padding: "20px",
            textAlign: "left",
            backgroundColor: "#202040",
            borderRadius: "15px",
            minHeight: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingLeft: "40px",
            paddingRight: "40px",
          }}
        >
          <h3
            style={{
              fontSize: "2.4rem",
              marginBottom: "20px",
              color: "#FFD700",
            }}
          >
            🚀 Ohlone Hacks 4.0
          </h3>
        </div>
      </div>

      {/* Media Query Styles */}
      <style jsx>{`
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
            transform: translateX(-${index * 100}vw); /* Scale to viewport width */
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
