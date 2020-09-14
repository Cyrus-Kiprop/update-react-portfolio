import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Portfolio.css";
import DisplayModal from "../Modal/DisplayModal";
import DisplayProject from "./DisplayProject";

export default function Portfolio() {
  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);

  const hideModal = () => setShow(false);

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
          <button
            type="button"
            onClick={() => showModal()}
            className="overall-btn"
          >
            See the project
          </button>
        </div>
      </div>
    </section>
  );
}
