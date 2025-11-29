import React from "react";
import Window from "../Window/Window";
import "./DynaRoster.css";

const DynaRoster = ({ onClose }) => {
  return (
    <Window
      title="https://dynaroster.com"
      className="dynaroster"
      type="browser"
      onClose={() => onClose && onClose("dynaroster")}
    >
      <h3>DynaRoster</h3>
      <div className="dynaroster-content">
        <div className="image-container">
          <img
            src="newlap.png"
            alt="DynaRoster Application"
            className="dynaroster-image"
          />
        </div>
        <div className="text-container">
          <p>
            <strong>DynaRoster</strong> is an intelligent workforce scheduling
            solution built with <strong>C#</strong> on the backend and{" "}
            <strong>React</strong> on the frontend. At its core, the application
            leverages <strong>Google's OR-Tools LP solver</strong> to optimize
            shift assignments by intelligently matching workers to shifts based
            on their skills, availability, and personal interests.
          </p>
        </div>
      </div>
    </Window>
  );
};

export default DynaRoster;
