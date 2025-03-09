import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        MATISSE CALLEWAERT
      </a>
      <div className="nav-links">
        <a href="/cv" className="nav-link">
          CV
        </a>
      </div>
    </header>
  );
};

export default Header;
