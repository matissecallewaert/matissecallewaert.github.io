import React, { useState, useRef, useEffect } from "react";
import "./Window.css";

// Track highest z-index across all windows
let highestZIndex = 10;

const Window = ({
  title,
  children,
  className,
  type = "default",
  smallPadding = false,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState(null);
  const [windowZIndex, setWindowZIndex] = useState(10);
  const windowRef = useRef(null);

  // Set initial position on mount
  useEffect(() => {
    if (windowRef.current && !position) {
      // Get container dimensions
      const container = document.body;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      // Get window dimensions from refs
      const windowWidth = windowRef.current.offsetWidth;
      const windowHeight = windowRef.current.offsetHeight;

      // Ensure the window stays within viewport boundaries
      const maxX = containerWidth - windowWidth;
      const maxY = containerHeight - windowHeight;

      let initialX, initialY;

      switch (className) {
        case "projects":
          initialX = containerWidth / 7;
          initialY = -60;
          break;
        case "bashbuddy":
          initialX = 20;
          initialY = containerHeight / 4;
          break;
        case "about-me":
          initialX = containerWidth / 3;
          initialY = containerHeight / 1.8;
          break;
        case "rustiflow":
          initialX = containerWidth / 1.6;
          initialY = containerHeight / 4;
          break;
        case "links":
          initialX = (containerWidth / 5) * 3;
          initialY = 0;
          break;
        case "clock-window":
          initialX = containerWidth / 2.1;
          initialY = 20;
          break;
        default:
          initialX = Math.max(0, Math.floor(Math.random() * maxX));
          initialY = Math.max(
            0,
            Math.floor(Math.random() * (maxY - 100)) + 100
          );
          break;
      }

      const newPosition = { x: initialX, y: initialY };
      setPosition(newPosition);

      // Apply the position directly to the element
      windowRef.current.style.left = `${newPosition.x}px`;
      windowRef.current.style.top = `${newPosition.y}px`;
    }
  }, [className]);

  const bringToFront = () => {
    // Increment the highest z-index and set it to this window
    highestZIndex += 1;
    setWindowZIndex(highestZIndex);
  };

  const handleMouseDown = (e) => {
    // Prevent dragging when clicking on the window controls
    if (
      e.target.classList.contains("window-circle-red") ||
      e.target.classList.contains("window-circle-yellow") ||
      e.target.classList.contains("window-circle-green")
    ) {
      return;
    }

    // Bring window to front when clicked
    bringToFront();

    if (windowRef.current) {
      // The key fix: Get current position from the element's computed style
      const currentLeft = parseInt(
        window.getComputedStyle(windowRef.current).left,
        10
      );
      const currentTop = parseInt(
        window.getComputedStyle(windowRef.current).top,
        10
      );

      // Calculate offset based on current position, not getBoundingClientRect
      const offsetX = e.clientX - currentLeft;
      const offsetY = e.clientY - currentTop;

      setDragOffset({ x: offsetX, y: offsetY });
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && windowRef.current) {
      // Apply the exact position calculation
      const x = e.clientX - dragOffset.x;
      const y = e.clientY - dragOffset.y;

      // Update visual position
      windowRef.current.style.left = `${x}px`;
      windowRef.current.style.top = `${y}px`;

      // Update state
      setPosition({ x, y });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Add and remove event listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  return (
    <div
      ref={windowRef}
      className={`window ${className} ${isDragging ? "dragging" : ""}`}
      style={{ zIndex: windowZIndex }}
      onClick={bringToFront}
    >
      {type === "browser" ? (
        <div className="browser-bar" onMouseDown={handleMouseDown}>
          <div className="window-controls">
            <div className="window-circle-red"></div>
            <div className="window-circle-yellow"></div>
            <div className="window-circle-green"></div>
          </div>
          <div className="url-bar">{title}</div>
          <div className="refresh-button">↻</div>
        </div>
      ) : type === "menu" ? (
        <div className="menu-bar" onMouseDown={handleMouseDown}>
          <div className="window-controls">
            <div className="window-circle-red"></div>
            <div className="window-circle-yellow"></div>
            <div className="window-circle-green"></div>
          </div>
          <div className="menu-item">{title}</div>
          <div className="menu-item">FILE</div>
          <div className="menu-item">EDIT</div>
          <div className="menu-item">OBJECT</div>
        </div>
      ) : (
        <div className="window-header" onMouseDown={handleMouseDown}>
          <div className="window-controls">
            <div className="window-circle-red"></div>
            <div className="window-circle-yellow"></div>
            <div className="window-circle-green"></div>
          </div>
          <div className="window-title">{title}</div>
        </div>
      )}
      <div className={`window-content ${smallPadding ? "small-padding" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Window;
