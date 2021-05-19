import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        My Profile
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/About"
              className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
            >
              About-Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contact"
              className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Project"
              className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
            >
              Project
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
