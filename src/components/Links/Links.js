import React from "react";
import Window from "../Window/Window";
import "./Links.css";

const Links = ({ onClose }) => {
  return (
    <Window
      title="https://my.links"
      className="links"
      type="browser"
      onClose={() => onClose && onClose("links")}
    >
      <h3>Me, elsewhere</h3>
      <p>
        You can also contact me on other platforms, whether it is to chat a bit
        or when you have an idea for a project.
      </p>
      <div className="social-links">
        <a
          href="https://www.instagram.com/matissecallewaert/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="instagram.png" alt="Instagram" width={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/matisse-callewaert-a32248269"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="LinkedIn_icon.svg.png" alt="Linkedin" width={30} />
        </a>
        <a
          href="https://github.com/matissecallewaert"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="github.svg" alt="Github" width={30} />
        </a>
        <a
          href="mailto:matisse.callewaert@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="Mail_(iOS).svg.png" alt="Github" width={30} />
        </a>
      </div>
    </Window>
  );
};

export default Links;
