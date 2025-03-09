import React from "react";
import Window from "../Window/Window";
import "./Links.css";

const Links = () => {
  return (
    <Window title="https://my.links" className="links" type="browser">
      <h3>Me, elsewhere</h3>
      <p>
        You can also contact me on other platforms, whether it is to chat a bit
        or when you have an idea for a project.
      </p>
      <div className="social-links">
        <a href="https://instagram.com" className="social-icon">
          <img src="instagram.png" alt="Instagram" width={30} />
        </a>
        <a href="https://twitter.com" className="social-icon">
          <img src="LinkedIn_icon.svg.png" alt="Linkedin" width={30} />
        </a>
        <a href="https://linkedin.com" className="social-icon">
          <img src="github.svg" alt="Github" width={30} />
        </a>
        <a href="mailto:contact@example.com" className="social-icon">
          <img src="Mail_(iOS).svg.png" alt="Github" width={30} />
        </a>
      </div>
    </Window>
  );
};

export default Links;
