import React from "react";
import Window from "../Window/Window";
import "./BashBuddy.css";

const BashBuddy = ({ onClose }) => {
  return (
    <Window
      title="https://github.com/matissecallewaert/bashbuddy"
      className="bashbuddy"
      type="browser"
      smallPadding={true}
      onClose={() => onClose && onClose("bashbuddy")}
    >
      <div>
        <a
          href="https://github.com/matissecallewaert/bashbuddy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="bashbuddy.png"
            alt="BashBuddy"
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

export default BashBuddy;
