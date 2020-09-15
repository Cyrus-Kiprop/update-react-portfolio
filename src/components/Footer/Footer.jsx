import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <form action="" className="contact-form">
        <div className="user-input">
          <div className="name-email-container">
            <input
              type="text"
              className="input-field"
              placeholder="Full name*"
            />
            <input type="text" className="input-field" placeholder="Email*" />
          </div>
          <textarea
            type="text-area"
            className="input-field message-field"
            name="w3review"
            placeholder="Message*"
            rows="4"
            cols="50"
          ></textarea>
        </div>
        <div className="submit-container">
          <button type="button" className="overall-btn">
            Get in touch
          </button>
          <span>cyruskiprop254gmail.com</span>
        </div>
      </form>

      <ul className="footer__social_links">
        <li>
          <Link to="#">
            <i className="fa fa-github" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fa fa-dribbble" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fa fa-medium" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fa fa-stack-overflow" aria-hidden="true"></i>
          </Link>
        </li>
      </ul>

      <span className="horizontal-drawer"></span>

      <span className="copy-right">
        <i className="fa fa-copyright" aria-hidden="true"></i>
        {new Date().toString().slice(10, 15)} Cyrus Kiprop
      </span>
    </footer>
  );
}
