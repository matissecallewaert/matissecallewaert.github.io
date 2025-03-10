import React from "react";
import Window from "../Window/Window";
import "./CV.css";

const CV = () => {
  return (
    <Window
      title="https://matissecallewaert.be/cv"
      className="cv"
      type="browser"
      smallPadding={true}
      fullLength={true}
    >
      <div className="iframe-container">
        <iframe src={"CV.pdf"} title="CV" allowFullScreen></iframe>
      </div>
    </Window>
  );
};

export default CV;
