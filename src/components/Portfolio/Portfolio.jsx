import React, { useState, useEffect, useRef } from "react";
import Radium, { StyleRoot } from "radium";

import "./Portfolio.css";

import DisplayModal from "../Modal/DisplayModal";
import DisplayProject from "./DisplayProject";
import styles from "../animation";
import zoomIn from "react-animations/lib/zoom-in";

export default function Portfolio() {
  useEffect(() => {});

  const [show, setShow] = useState(false);

  const showModal = (event) => {
    event.preventDefault();
    setShow(true);
    document.body.style.position = "fixed";
    document.body.style.top = `-${window.scrollY}px`;
  };

  const hideModal = (event) => {
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
    setShow(false);
  };

  return (
    <StyleRoot>
      <section className="portfolio">
        <h1 className="section_title">My Portfolio</h1>
        <div className="portfolio__items">
          {new Array(9).fill(0).map(() => {
            return (
              <div className="portfolio__item">
                <div className="portfolio__item-img">
                  <h2>Traviso</h2>
                  <div
                    className="stack-gutter"
                    style={styles.animationGenerator(1, zoomIn)}
                  >
                    <div className="stack-container">
                      <div className="portfolio__item-stack"> HTML/CSS</div>
                      <div className="portfolio__item-stack">
                        {" "}
                        Ruby on Rails
                      </div>
                      <div className="portfolio__item-stack">Javascript</div>
                    </div>
                    <button
                      type="button"
                      onClick={showModal}
                      className="overall-btn"
                    >
                      See the project
                    </button>
                  </div>
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
                <button
                  type="button"
                  onClick={showModal}
                  className="overall-btn"
                >
                  See the project
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </StyleRoot>
  );
}
