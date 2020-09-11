import React from "react";
import { Link } from "react-router-dom";

import "./Portfolio.css";
export default function Portfolio() {
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
          <div className="overall-btn">
            <Link to="#">See the project</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
