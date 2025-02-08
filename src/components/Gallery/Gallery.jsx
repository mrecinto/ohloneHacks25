import { useState, useEffect } from "react";

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
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
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div className="slideshow-container" style={{ overflow: "hidden", width: "500px", position: "relative" }}>
        <div
          className="slideshow"
          style={{
            display: "flex",
            transition: "transform 1s ease-in-out",
            transform: `translateX(-${index * 100}%)`
          }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Slide ${i + 1}`}
              style={{ width: "500px", height: "300px", flexShrink: 0 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
