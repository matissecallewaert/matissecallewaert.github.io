import React from "react";
import "./VerticalToolBar.css";

const VerticalToolbar = ({ windows, setWindows }) => {
  const iconConfig = {
    links: {
      icon: "links-icon.svg",
      title: "Links",
      altText: "Social media links",
    },
    "clock-window": {
      icon: "clock-icon.svg",
      title: "Clock",
      altText: "Digital clock",
    },
    "about-me": {
      icon: "about-me-icon.svg",
      title: "About Me",
      altText: "Personal information",
    },
    award: {
      icon: "award-icon.svg",
      title: "Award",
      altText: "Leo Baekeland Award 2025",
    },
    projects: {
      icon: "cv-icon.svg",
      title: "Projects",
      altText: "Project showcase",
    },
    timeline: {
      icon: "timeline-icon.svg",
      title: "Timeline",
      altText: "My journey timeline",
    },
    dynaroster: {
      icon: "logo_black_without.svg",
      title: "DynaRoster",
      altText: "Workforce scheduling solution",
    },
    strategoo: {
      icon: "logo_short.svg",
      title: "Strategoo",
      altText: "Financial wellness platform",
    },
    bashbuddy: {
      icon: "bashbuddy-icon.svg",
      title: "Bash Buddy",
      altText: "Command line tool",
    },
    rustiflow: {
      icon: "rustiflow-icon.svg",
      title: "RustiFlow",
      altText: "Network traffic tool",
    },
    "ai-tetris": {
      icon: "ai-tetris-icon.svg",
      title: "AI Tetris",
      altText: "Tetris game",
    },
    "guid-generator": {
      icon: "guid-generator-icon.svg",
      title: "GUID Generator",
      altText: "Random GUID",
    },
    "art-portfolio": {
      icon: "art-portfolio-icon.svg",
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
