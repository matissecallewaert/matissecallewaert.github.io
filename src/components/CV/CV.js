import React, { useState, useEffect } from "react";
import Window from "../Window/Window";
import "./CV.css";

const CV = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile based on screen width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Common breakpoint for mobile devices
    };

    // Initial check
    checkMobile();

    // Listen for window resize events
    window.addEventListener("resize", checkMobile);

    // Cleanup event listener
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // For mobile view, use a static container instead of draggable window
  if (isMobile) {
    return (
      <div className="cv-mobile-container">
        <div className="iframe-container">
          <iframe src={"CV.pdf"} title="CV" allowFullScreen></iframe>
        </div>
      </div>
    );
  }

  return (
    <Window
      title="https://matissecallewaert.be/cv"
      className="cv"
      type="browser"
      smallPadding={true}
      fullLength={true}
    >
      <div className="iframe-container">
        <iframe src={"CV.pdf"} title="CV" allowFullScreen></iframe>
      </div>
    </Window>
  );
};

export default CV;
