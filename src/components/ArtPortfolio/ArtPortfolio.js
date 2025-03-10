import React from "react";
import Window from "../Window/Window";
import "./ArtPortfolio.css";

const ArtPortfolio = ({ onClose }) => {
  return (
    <Window
      title="https://github.com/matissecallewaert/art-portfolio"
      className="art-portfolio"
      type="browser"
      smallPadding={true}
      onClose={() => onClose && onClose("art-portfolio")}
    >
      <div>
        <a
          href="https://github.com/matissecallewaert/art-portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="art-portfolio.png"
            alt="Art Portfolio"
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

export default ArtPortfolio;
