import { useState, useEffect } from "react";

const images = [
  "",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image1.jpg",
  "/image2.jpg",
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
    <section style={{ textAlign: "center", padding: "20px", backgroundColor: "#171031" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#fff" }}>Gallery</h2>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div className="slideshow-container" style={{ overflow: "hidden", width: "700px", position: "relative" }}>
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
                style={{ width: "700px", height: "500px", flexShrink: 0 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
