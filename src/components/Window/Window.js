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
      const savedPosition = localStorage.getItem(
        `window-position-${className}`
      );

      if (savedPosition) {
        const parsedPosition = JSON.parse(savedPosition);
        setPosition(parsedPosition);

        windowRef.current.style.left = `${parsedPosition.x}px`;
        windowRef.current.style.top = `${parsedPosition.y}px`;
      } else {
        const container = document.body;
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        const windowWidth = windowRef.current.offsetWidth;
        const windowHeight = windowRef.current.offsetHeight;

        let initialX, initialY;

        switch (className) {
          case "projects":
            initialX = containerWidth / 10;
            initialY = 20;
            break;
          case "bashbuddy":
            initialX = 20;
            initialY = containerHeight / 4;
            break;
          case "about-me":
            initialX = containerWidth / 2;
            initialY = containerHeight / 3;
            break;
          case "rustiflow":
            initialX = containerWidth / 1.6;
            initialY = containerHeight / 4;
            break;
          case "links":
            initialX = (containerWidth / 5) * 3;
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
      ) : type === "menu" ? (
        <div className="menu-bar" onMouseDown={handleMouseDown}>
          <div className="window-controls">
            <div className="window-circle-red" onClick={handleClose}></div>
            <div className="window-circle-yellow" onClick={handleClose}></div>
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
