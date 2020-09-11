import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <form action="" className="contact-form">
        <div className="name-email-container">
          <input type="text" className="input-field" placeholder="Full name*" />
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
        <div className="submit-container">
          <button type="button" className="overall-btn">
            Get in touch
          </button>
          <span>cyruskiprop254gmail.com</span>
        </div>
      </form>
      <span className="horizontal-drawer"></span>

      <span className="copy-right">
        <i class="fa fa-copyright" aria-hidden="true"></i>
        {new Date().toString().slice(10, 15)} Cyrus Kiprop
      </span>
    </footer>
  );
}
