import React, { useEffect } from "react";
import "./bee.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function Bee() {
  useEffect(() => {
    // Set default easing
    gsap.defaults({ ease: "none" });

    // Create the main animation timeline
    const main = gsap.timeline({
      scrollTrigger: {
        trigger: "#svg", // The SVG container
        scrub: true, // Sync animation with scrolling
        start: "top center", // Start animation when top of SVG hits center of viewport
        end: "bottom center", // End animation when bottom of SVG hits center of viewport
      },
    });

    // Fade in the bee image
    main.to("#ball01", { autoAlpha: 1, duration: 0.05 });

    // Make the bee follow the predefined path and rotate with the angle of the path
    main.to(
      "#ball01",
      {
        motionPath: {
          path: ".theLine", // Path to follow
          align: ".theLine", // Align the bee to the path
          alignOrigin: [0.5, 0.5], // Center alignment on the path
          autoRotate: true, // Automatically rotate to match the path's angle
        },
        duration: 4, // Duration of the animation
      },
      0
    );

    // Cleanup animation on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf("#ball01");
    };
  }, []); // Empty dependency array ensures this runs once after the component mounts

  return (
    <div>
      <div class="bee_container">
        <svg id="svg_bee" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 1200">
          {/* Predefined Path */}
          <path
            className="theLine"
            d="M 50 50 
              Q 150 100, 100 200 
              T 200 300 
              Q 300 200, 400 300 
              C 450 400, 300 500, 200 600 
              Q 100 700, 300 800 
              T 500 900 
              C 550 950, 400 1000, 300 1100 
              T 150 1200"
            fill="none"
            stroke="white"
            strokeWidth="10px"
          />

          {/* Bee Image */}
          <image
            id="ball01"
            href="https://media.discordapp.net/attachments/1145751346797101107/1331851646011052084/bee.png?ex=67931f01&is=6791cd81&hm=34dece0860c9b5ef28fb608bcc5a6effca2cfbd3882c574e1974df48f20fc301&=&format=webp&quality=lossless"
            width="80"
            height="80"
            x="-100"
            y="-100"
            style={{ opacity: 0 }}
          />
        </svg>
      </div>
      
    </div>
  );
}

export default Bee;
