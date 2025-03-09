import React from "react";
import "./Window.css";

const Window = ({ title, children, className, type = "default" }) => {
  return (
    <div className={`window ${className}`}>
      {type === "browser" ? (
        <div className="browser-bar">
          <div className="window-controls">
            <div className="window-circle-red"></div>
            <div className="window-circle-yellow"></div>
            <div className="window-circle-green"></div>
          </div>
          <div className="url-bar">{title}</div>
          <div className="refresh-button">↻</div>
        </div>
      ) : type === "menu" ? (
        <div className="menu-bar">
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
        <div className="window-header">
          <div className="window-controls">
            <div className="window-circle-red"></div>
            <div className="window-circle-yellow"></div>
            <div className="window-circle-green"></div>
          </div>
          <div className="window-title">{title}</div>
        </div>
      )}
      <div className="window-content">{children}</div>
    </div>
  );
};

export default Window;
