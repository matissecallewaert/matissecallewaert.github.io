import React from "react";
import Window from "../Window/Window";
import "./BashBuddy.css";

const BashBuddy = () => {
  return (
    <Window
      title="https://github.com/matissecallewaert/bashbuddy"
      className="bashbuddy"
      type="browser"
      smallPadding={true}
    >
      <div>
        <img
          src="bashbuddy.png"
          alt="BashBuddy"
          style={{
            maxWidth: "100%",
            borderEndStartRadius: "20px",
            borderEndEndRadius: "20px",
          }}
        />
      </div>
    </Window>
  );
};

export default BashBuddy;
