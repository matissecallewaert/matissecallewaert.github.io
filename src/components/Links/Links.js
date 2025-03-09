import React from "react";
import Window from "../Window/Window";
import "./Links.css";

const Links = () => {
  return (
    <Window title="LINKS" className="links" type="browser">
      <h3>Me, elsewhere</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      </p>
      <div className="social-links">
        <a href="https://instagram.com" className="social-icon">
          📷
        </a>
        <a href="https://twitter.com" className="social-icon">
          🐦
        </a>
        <a href="https://linkedin.com" className="social-icon">
          🔗
        </a>
        <a href="mailto:contact@example.com" className="social-icon">
          ✉️
        </a>
      </div>
    </Window>
  );
};

export default Links;
