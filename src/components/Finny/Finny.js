import React from "react";
import Window from "../Window/Window";
import "./Finny.css";

const Finny = ({ onClose }) => {
  return (
    <Window
      title="https://finny.be"
      className="finny"
      type="browser"
      onClose={() => onClose && onClose("finny")}
    >
      <a href="https://finny.be" target="_blank" rel="noopener noreferrer">
        <h3>Finny</h3>
        <div className="finny-content">
          <div className="image-container">
            <img
              src="finny-hero.png"
              alt="Finny homepage"
              className="finny-image"
            />
          </div>
          <div className="text-container">
            <p>
              <strong>Finny</strong> is a platform I co-founded that helps
              (starting) entrepreneurs and business leaders launch their
              company. It turns your idea into a complete{" "}
              <strong>business plan</strong> with a fully synchronized financial
              model: income statement, balance sheet and cash flow. Belgian
              fiscal rules are built in, so you walk into the bank with a plan
              that holds up.
            </p>
          </div>
        </div>
      </a>
    </Window>
  );
};

export default Finny;
