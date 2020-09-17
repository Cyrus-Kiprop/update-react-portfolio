import React, { useState } from 'react';

import './Footer.css';

export default function Footer() {
  const [messages, setMessages] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [disable, setDisabled] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setMessages({ ...messages, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisabled(true);

    const templateId = 'lakefire';

    sendFeedback(templateId, {
      message_html: messages.message,
      from_name: messages.name,
      reply_to: 'cyruskiprop254@gmail.com',
      from_email: messages.email,
      to_name: 'Kiprop',
    });
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send(
        'lakefire',
        'template_v3s8gqx',
        variables,
        'user_6d4qD668qOXeuT0IZqzRz'
      )
      .then((res) => {
        setDisabled(false);
        console.log('Email successfully sent!');
      })
      .catch((err) =>
        console.error(
          'Oh well, you failed. Here some thoughts on the error that occured:',
          err
        )
      );
  };

  return (
    <footer id="contacts" className="footer-section">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="user-input">
          <div className="name-email-container">
            <input
              type="text"
              name="name"
              className="input-field"
              placeholder="Full name*"
              onChange={handleChange}
            />
            <input
              type="text"
              className="input-field"
              name="email"
              onChange={handleChange}
              placeholder="Email*"
            />
          </div>
          <textarea
            type="text-area"
            className="input-field message-field"
            name="message"
            onChange={handleChange}
            placeholder="Message*"
            rows="4"
            cols="50"
          ></textarea>
        </div>
        <div className="submit-container">
          <button
            style={{
              backgroundColor: disable ? '#FA4969' : '#fa4969',
            }}
            disabled={disable}
            type="submit"
            className="overall-btn"
          >
            Get in touch
          </button>
          <span>cyruskiprop254gmail.com</span>
        </div>
      </form>

      <ul className="footer__social_links">
        <li>
          <a
            href="https://github.com/Cyrus-Kiprop"
            rel="noreferrer noopener"
            target="_blank"
          >
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/kipropJS"
            rel="noreferrer noopener"
            target="_blank"
          >
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kiprop-kemboi"
            rel="noreferrer noopener"
            target="_blank"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://dribbble.com/kiprop_kemboi"
            rel="noreferrer noopener"
            target="_blank"
          >
            <i className="fa fa-dribbble" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@cyrus_kiprop"
            rel="noreferrer noopener"
            target="_blank"
          >
            <i className="fa fa-medium" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://stackoverflow.com/users/11657709/cyrus-kiprop"
            rel="noreferrer noopener"
            target="_blank"
          >
            <i className="fa fa-stack-overflow" aria-hidden="true"></i>
          </a>
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
