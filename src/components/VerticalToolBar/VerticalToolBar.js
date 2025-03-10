import React from "react";
import "./VerticalToolBar.css";

const VerticalToolbar = ({ windows, setWindows }) => {
  const iconConfig = {
    links: {
      icon: "links-icon.png",
      title: "Links",
      altText: "Social media links",
    },
    "clock-window": {
      icon: "clock-icon.png",
      title: "Clock",
      altText: "Digital clock",
    },
    "about-me": {
      icon: "about-me-icon.png",
      title: "About Me",
      altText: "Personal information",
    },
    projects: {
      icon: "cv-icon.png",
      title: "Projects",
      altText: "Project showcase",
    },
    bashbuddy: {
      icon: "bashbuddy-logo.png",
      title: "Bash Buddy",
      altText: "Command line tool",
    },
    rustiflow: {
      icon: "RustiFlow_nobg.png",
      title: "RustiFlow",
      altText: "Network traffic tool",
    },
    "ai-tetris": {
      icon: "tetris-icon.gif",
      title: "AI Tetris",
      altText: "Tetris game",
    },
    "guid-generator": {
      icon: "guid-generator-icon.png",
      title: "GUID Generator",
      altText: "Random GUID",
    },
    "art-portfolio": {
      icon: "art-portfolio-icon.png",
      title: "Art Portfolio",
      altText: "Artwork showcase",
    },
  };

  const toggleWindow = (windowClass) => {
    setWindows((prevWindows) => ({
      ...prevWindows,
      [windowClass]: !prevWindows[windowClass],
    }));
  };

  return (
    <div className="vertical-toolbar">
      {Object.keys(windows).map((windowClass) => {
        const config = iconConfig[windowClass];
        return (
          <div
            key={windowClass}
            className={`toolbar-icon ${windows[windowClass] ? "active" : ""}`}
            onClick={() => toggleWindow(windowClass)}
            title={config.title}
          >
            <img
              src={config.icon}
              alt={config.altText}
              className="custom-icon"
            />
          </div>
        );
      })}
    </div>
  );
};

export default VerticalToolbar;
