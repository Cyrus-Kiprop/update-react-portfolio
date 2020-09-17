import React from 'react';
import Radium, { StyleRoot } from 'radium';

import './Header.css';
import fadeInLeft from 'react-animations/lib/fade-in-left';
import zoomIn from 'react-animations/lib/zoom-in';

const styles = {
  animationGenerator: (duration = 1, type, animationName) => {
    return {
      animation: `x ${duration}s`,
      animationName: Radium.keyframes(type, animationName),
    };
  },
};
export default function Header() {
  return (
    <StyleRoot>
      <div id="intro" className="header">
        <h1
          className="header__name"
          style={styles.animationGenerator(1, fadeInLeft)}
        >
          Cyrus Kemboi.
        </h1>
        <h3
          className="header__stack"
          style={styles.animationGenerator(1.5, fadeInLeft)}
        >
          Full-Stack Ruby on Rails Engineer
        </h3>
        <p
          className="header__about-me"
          style={styles.animationGenerator(1.8, fadeInLeft)}
        >
          Hello I am a software developer! I can help you build a product.
          feature or website. Look through some of my work and experience! if
          you like what you see and have project you need coded, don't hesitate
          to contact me.
        </p>
        <div
          className="header__social"
          style={styles.animationGenerator(1.8, zoomIn)}
        >
          <p>My works in social networks</p>
          <ul className="header__social_links">
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
        </div>
      </div>
    </StyleRoot>
  );
}
