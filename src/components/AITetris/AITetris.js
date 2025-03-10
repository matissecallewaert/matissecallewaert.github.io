import React from "react";
import Window from "../Window/Window";
import "./AITetris.css";

const AITetris = ({ onClose }) => {
  return (
    <Window
      title="https://matissecallewaert.github.io/ai-tetris/"
      className="ai-tetris"
      type="browser"
      smallPadding={true}
      onClose={() => onClose && onClose("ai-tetris")}
    >
      <div>
        <a
          href="https://matissecallewaert.github.io/ai-tetris/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="ai-tetris.png"
            alt="AI Tetris"
            style={{
              maxWidth: "100%",
              borderEndStartRadius: "20px",
              borderEndEndRadius: "20px",
            }}
          />
        </a>
      </div>
    </Window>
  );
};

export default AITetris;
