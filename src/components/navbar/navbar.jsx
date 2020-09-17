import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Scroll from 'react-scroll';

import './navbar.css';

var Link = Scroll.Link;

export default function Navbar() {
  const introRef = useRef();
  const portRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

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
  };

  return (
    <div className="navbar">
      <div className="navbar_logo">
        <NavLink to="about">CK</NavLink>
      </div>
      <ul className="navlinks">
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
  );
}
