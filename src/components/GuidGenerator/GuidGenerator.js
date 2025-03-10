import React from "react";
import Window from "../Window/Window";
import "./GuidGenerator.css";

const GuidGenerator = ({ onClose }) => {
  return (
    <Window
      title="https://addons.mozilla.org/en-US/firefox/addon/random-guid-generator"
      className="guid-generator"
      type="browser"
      smallPadding={true}
      onClose={() => onClose && onClose("guid-generator")}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a
          href="https://addons.mozilla.org/en-US/firefox/addon/random-guid-generator/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="guid-generator.png"
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

export default GuidGenerator;
