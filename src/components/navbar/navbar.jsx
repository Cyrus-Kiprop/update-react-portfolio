import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Router>
        <div className="navbar_logo">
          <Link to="/home">CK</Link>
        </div>
        <ul className="navlinks">
          <li className="navlinks_item nav-active">
            <Link to="/home">Intro</Link>
          </li>
          <li className="navlinks_item">
            <Link to="/home">Portfolio</Link>
          </li>
          <li className="navlinks_item">
            <Link to="/home">About</Link>
          </li>
          <li className="navlinks_item">
            <Link to="/home">Contact</Link>
          </li>
        </ul>
      </Router>
    </div>
  );
}
