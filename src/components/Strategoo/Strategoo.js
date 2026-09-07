import React from "react";
import Window from "../Window/Window";
import "./Strategoo.css";

const Strategoo = ({ onClose }) => {
  return (
    <Window
      title="https://strategoo.be"
      className="strategoo"
      type="browser"
      onClose={() => onClose && onClose("strategoo")}
    >
      <a href="https://strategoo.be" target="_blank" rel="noopener noreferrer">
        <h3>Strategoo</h3>
      </a>
      <div className="strategoo-content">
        <a
          href="https://strategoo.be"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container"
        >
          <img
            src="laptop-strategoo-dashboard.png"
            alt="Webfin dashboard"
            className="strategoo-image"
          />
        </a>
        <div className="text-container">
          <p>
            <strong>Strategoo</strong> is the consultancy firm I co-founded,
            and the builder behind <strong>Webfin</strong> and{" "}
            <strong>Finny</strong>. Webfin, running on{" "}
            <a
              href="https://app.strategoo.be"
              target="_blank"
              rel="noopener noreferrer"
            >
              app.strategoo.be
            </a>
            , is our financial wellness platform that helps people take control
            of their financial future with intuitive planning tools and expert
            guidance.
          </p>
        </div>
      </div>
    </Window>
  );
};

export default Strategoo;
