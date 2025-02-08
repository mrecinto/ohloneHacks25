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