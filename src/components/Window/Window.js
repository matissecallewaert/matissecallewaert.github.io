import React, { useState, useRef, useEffect, useCallback } from "react";
import "./Window.css";

let highestZIndex = 10;

const Window = ({
  title,
  children,
  className,
  type = "default",
  smallPadding = false,
  fullLength = false,
  onClose = null,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState(null);
  const [windowZIndex, setWindowZIndex] = useState(10);
  const windowRef = useRef(null);

  useEffect(() => {
    if (windowRef.current && !position) {
      const container = document.body;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      const windowWidth = windowRef.current.offsetWidth;
      const windowHeight = windowRef.current.offsetHeight;

      const savedPosition = localStorage.getItem(
        `window-position-${className}`
      );

      if (savedPosition) {
        const parsedPosition = JSON.parse(savedPosition);

        // Validate and constrain the saved position to viewport boundaries
        let validX = parsedPosition.x;
        let validY = parsedPosition.y;

        // Ensure window doesn't go off the right edge
        if (validX + windowWidth > containerWidth) {
          validX = Math.max(0, containerWidth - windowWidth);
        }

        // Ensure window doesn't go off the bottom edge
        if (validY + windowHeight > containerHeight) {
          validY = Math.max(0, containerHeight - windowHeight);
        }

        // Ensure window isn't too far left (keep at least 100px visible)
        if (validX < -windowWidth + 100) {
          validX = 0;
        }

        // Ensure window isn't too far up (keep at least 50px visible)
        if (validY < 0) {
          validY = 0;
        }

        const constrainedPosition = { x: validX, y: validY };
        setPosition(constrainedPosition);

        windowRef.current.style.left = `${validX}px`;
        windowRef.current.style.top = `${validY}px`;

        // Update localStorage with constrained position if it changed
        if (validX !== parsedPosition.x || validY !== parsedPosition.y) {
          localStorage.setItem(
            `window-position-${className}`,
            JSON.stringify(constrainedPosition)
          );
        }
      } else {
        let initialX, initialY;

        switch (className) {
          case "projects":
            initialX = containerWidth / 10;
            initialY = 20;
            break;
          case "timeline":
            initialX = (containerWidth / 8) * 5;
            initialY = containerHeight / 10;
            break;
          case "dynaroster":
            initialX = containerWidth / 3;
            initialY = containerHeight / 5;
            break;
          case "strategoo":
            initialX = containerWidth / 2.2;
            initialY = containerHeight / 6;
            break;
          case "bashbuddy":
            initialX = 20;
            initialY = containerHeight / 4;
            break;
          case "about-me":
            initialX = containerWidth / 3;
            initialY = containerHeight / 3;
            break;
          case "award":
            initialX = containerWidth / 5;
            initialY = containerHeight / 1.5;
            break;
          case "rustiflow":
            initialX = containerWidth / 1.6;
            initialY = containerHeight / 4;
            break;
          case "links":
            initialX = (containerWidth / 5) * 2;
            initialY = -0;
            break;
          case "clock-window":
            initialX = 20;
            initialY = containerHeight / 1.5;
            break;
          default:
            initialX = (containerWidth - windowWidth) / 2;
            initialY = (containerHeight - windowHeight) / 2;
            break;
        }

        const newPosition = { x: initialX, y: initialY };
        setPosition(newPosition);

        windowRef.current.style.left = `${newPosition.x}px`;
        windowRef.current.style.top = `${newPosition.y}px`;
      }
    }
  }, [className, position]);

  const bringToFront = () => {
    highestZIndex += 1;
    setWindowZIndex(highestZIndex);
  };

  const handleMouseDown = (e) => {
    if (
      e.target.classList.contains("window-circle-red") ||
      e.target.classList.contains("window-circle-yellow") ||
      e.target.classList.contains("window-circle-green")
    ) {
      return;
    }

    bringToFront();

    if (windowRef.current) {
      const currentLeft = parseInt(
        window.getComputedStyle(windowRef.current).left,
        10
      );
      const currentTop = parseInt(
        window.getComputedStyle(windowRef.current).top,
        10
      );

      const offsetX = e.clientX - currentLeft;
      const offsetY = e.clientY - currentTop;

      setDragOffset({ x: offsetX, y: offsetY });
      setIsDragging(true);
    }
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (isDragging && windowRef.current) {
        const x = e.clientX - dragOffset.x;
        const y = e.clientY - dragOffset.y;
        windowRef.current.style.left = `${x}px`;
        windowRef.current.style.top = `${y}px`;
        setPosition({ x, y });

        localStorage.setItem(
          `window-position-${className}`,
          JSON.stringify({ x, y })
        );
      }
    },
    [isDragging, dragOffset, className]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

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
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleClose = (e) => {
    e.stopPropagation();
    if (onClose) {
      onClose(className);
    }
  };

  return (
    <div
      ref={windowRef}
      className={`window ${className} ${isDragging ? "dragging" : ""} ${
        fullLength ? "full-length" : ""
      }`}
      style={{ zIndex: windowZIndex }}
      onClick={bringToFront}
    >
      {type === "browser" ? (
        <div className="browser-bar" onMouseDown={handleMouseDown}>
          <div className="window-controls">
            <div className="window-circle-red" onClick={handleClose}></div>
            <div className="window-circle-yellow" onClick={handleClose}></div>
            <div className="window-circle-green"></div>
          </div>
          <div className="url-bar">{title}</div>
          <div className="refresh-button">↻</div>
        </div>
      ) : (
        <div className="window-header" onMouseDown={handleMouseDown}>
          <div className="window-controls">
            <div className="window-circle-red" onClick={handleClose}></div>
            <div className="window-circle-yellow" onClick={handleClose}></div>
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
