import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"; // Import specific styles for this component

const Header = () => {
  return (
    <div className="header">
      <div className="logo"></div>
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>{" "}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>{" "}
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
