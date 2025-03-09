import React from "react";
import Window from "../Window/Window";
import "./RustiFlow.css";

const RustiFlow = () => {
  return (
    <Window
      title="https://github.com/idlab-discover/RustiFlow"
      className="rustiflow"
      type="browser"
      smallPadding={true}
    >
      <div>
        <img
          src="rustiflow.png"
          alt="RustiFlow"
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

export default RustiFlow;
