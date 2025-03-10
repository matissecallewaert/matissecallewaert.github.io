import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        MATISSE CALLEWAERT
      </Link>
      <div className="nav-links">
        <Link to="/cv" className="nav-link">
          CV
        </Link>
      </div>
    </header>
  );
};

export default Header;
