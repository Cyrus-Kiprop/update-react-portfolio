import React from "react";
import { bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";

import "./Header.css";
import fadeInLeft from "react-animations/lib/fade-in-left";
import flash from "react-animations/lib/flash";
import fadeIn from "react-animations/lib/fade-in";
import fadeInUpBig from "react-animations/lib/fade-in-up-big";
import zoomIn from "react-animations/lib/zoom-in";

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
      <div className="header">
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
              <i class="fa fa-github" aria-hidden="true"></i>
            </li>
            <li>
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </li>
            <li>
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </li>
            <li>
              <i class="fa fa-dribbble" aria-hidden="true"></i>
            </li>
            <li>
              <i class="fa fa-medium" aria-hidden="true"></i>
            </li>
            <li>
              <i class="fa fa-stack-overflow" aria-hidden="true"></i>
            </li>
          </ul>
        </div>
      </div>
    </StyleRoot>
  );
}
