import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Scroll from 'react-scroll';
import { StyleRoot } from 'radium';

import styles from '../animation';

import './navbar.css';
import fadeInRight from 'react-animations/lib/fade-in-left';

var Link = Scroll.Link;

export default function Navbar() {
  const introRef = useRef();
  const portRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const smNavRef = useRef();

  const handleActive = (event) => {
    event.preventDefault();
    const { target } = event;
    [
      introRef.current,
      portRef.current,
      aboutRef.current,
      contactRef.current,
    ].map((element) => element.classList.remove('nav-active'));
    target.parentNode.classList.add('nav-active');
    smNavRef.current.classList.toggle('none');
  };

  const closeSmNav = (event) => {
    event.preventDefault();
    smNavRef.current.classList.toggle('none');
  };

  return (
    <StyleRoot>
      <div className="navbar">
        <div className="navbar_logo">
          <NavLink to="/">CK</NavLink>
        </div>

        <div onClick={closeSmNav} className="hamburger-wrapper">
          <div class="ham-container">
            <div class="hamburger">
              <div class="bread-top"></div>
              <div class="vegetables"></div>
              <div class="tomato"></div>
              <div class="cheese"></div>
              <div class="meat"></div>
              <div class="bread-bottom"></div>
            </div>
          </div>
        </div>

        {/* <div className="navlinks-sm"> */}
        <ul
          ref={smNavRef}
          style={styles.animationGenerator(1, fadeInRight)}
          id="navlinks-sm"
          className="navlinks none"
        >
          <li className="navlinks_item" ref={introRef}>
            <Link
              activeClass="active"
              to="intro"
              spy={true}
              smooth={true}
              offset={0}
              duration={3000}
              onClick={handleActive}
            >
              Intro
            </Link>
          </li>
          <li className="navlinks_item" ref={portRef}>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              duration={1500}
              offset={-130}
              onClick={handleActive}
            >
              Portfolio
            </Link>
          </li>
          <li className="navlinks_item" ref={aboutRef}>
            <Link
              activeClass="active"
              to="details"
              spy={true}
              smooth={true}
              duration={1500}
              offset={-130}
              onClick={handleActive}
            >
              About
            </Link>
          </li>
          <li ref={contactRef} className="navlinks_item">
            <Link
              activeClass="nav-active"
              spy={true}
              smooth={true}
              offset={0}
              duration={3000}
              to="contacts"
              onClick={handleActive}
            >
              Contact
            </Link>
          </li>
          <button onClick={closeSmNav} className="nav-close">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </ul>
        {/* </div> */}

        <ul id="navlinks" className="navlinks">
          <li className="navlinks_item" ref={introRef}>
            <Link
              activeClass="active"
              to="intro"
              spy={true}
              smooth={true}
              offset={0}
              duration={3000}
              onClick={handleActive}
            >
              Intro
            </Link>
          </li>
          <li className="navlinks_item" ref={portRef}>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              duration={1500}
              offset={-130}
              onClick={handleActive}
            >
              Portfolio
            </Link>
          </li>
          <li className="navlinks_item" ref={aboutRef}>
            <Link
              activeClass="active"
              to="details"
              spy={true}
              smooth={true}
              duration={1500}
              offset={-130}
              onClick={handleActive}
            >
              About
            </Link>
          </li>
          <li ref={contactRef} className="navlinks_item">
            <Link
              activeClass="nav-active"
              spy={true}
              smooth={true}
              offset={0}
              duration={3000}
              to="contacts"
              onClick={handleActive}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </StyleRoot>
  );
}
