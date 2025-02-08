import { useState, useEffect } from "react";

const images = [
  "https://drive.google.com/uc?id=1QzexeLPBMVVOQuBGntmnjIyVRH3bJGgs",
  "https://drive.google.com/uc?id=1QzexeLPBMVVOQuBGntmnjIyVRH3bJGgs" 
  // Add more iframe URLs here
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
