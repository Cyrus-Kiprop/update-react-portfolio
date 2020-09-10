import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

import './navbar.css'

export default function Navbar() {
  return (
    <div>
      <ul className="navbar">
          <Router>
        <li className="navbar_item">
          <Link to="/home">CK</Link>
        </li>
        <li className="navbar_item">
          <Link to="/home">Portfolio</Link>
        </li>
        <li className="navbar_item">
          <Link to="/home">About</Link>
        </li>
        <li className="navbar_item">
          <Link to="/home">Contact</Link>
        </li>
          </Router>
      </ul>
    </div>
  );
}
