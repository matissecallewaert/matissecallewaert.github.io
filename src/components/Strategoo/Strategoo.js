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
        <div className="strategoo-content">
          <div className="image-container">
            <img
              src="laptop-strategoo-dashboard.png"
              alt="Strategoo Dashboard"
              className="strategoo-image"
            />
          </div>
          <div className="text-container">
            <p>
              <strong>Strategoo</strong> is a financial wellness platform I
              co-founded to help people take control of their financial future.
              The platform combines intuitive financial planning tools with
              expert guidance to make managing money accessible and
              straightforward for everyone.
            </p>
          </div>
        </div>
      </a>
    </Window>
  );
};

export default Strategoo;
