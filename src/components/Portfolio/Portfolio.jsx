import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./Portfolio.css";
import DisplayModal from "../Modal/DisplayModal";
import DisplayProject from "./DisplayProject";

export default function Portfolio() {
  useEffect(() => {});

  const [show, setShow] = useState(false);

  const showModal = (event) => {
    event.preventDefault();
    setShow(true);
    document.body.style.position = "fixed";
    document.body.style.top = `-${window.scrollY}px`;
  };

  const hideModal = () => {
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
    setShow(false);
  };

  return (
    <section className="portfolio">
      <h1 className="section_title">My Portfolio</h1>
      <div className="portfolio__items">
        <div className="portfolio__item">
          <div className="portfolio__item-img">
            <img src="" alt="" />
          </div>
          <div className="stack-container">
            <div className="portfolio__item-stack"> HTML/CSS</div>
            <div className="portfolio__item-stack"> Ruby on Rails</div>
            <div className="portfolio__item-stack">Javascript</div>
          </div>
          <DisplayModal show={show} handleClose={hideModal}>
            <DisplayProject />
          </DisplayModal>
          <button type="button" onClick={showModal} className="overall-btn">
            See the project
          </button>
        </div>
      </div>
    </section>
  );
}
