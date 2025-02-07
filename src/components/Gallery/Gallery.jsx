import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            className="slide"
            animate={{ x: `${(i - index) * 100}%` }}
            transition={{ type: "tween", duration: 0.8 }}
          />
        ))}
      </div>
    </div>
  );
}
