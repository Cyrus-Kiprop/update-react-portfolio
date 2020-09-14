import React from "react";

import "./DisplayProject.css";
import projectImg from "../../assets/images/project-preview.svg";
import { Link } from "react-router-dom";

export default function DisplayProject() {
  return (
    <div className="modal-content">
      <div
        className="project__img"
        style={{
          backgroundImage: `url(${projectImg})`,
        }}
      ></div>
      <div className="project-info">
        <div>
          <div className="project__corousel">
            <div
              className="project_corousel-image ov-img"
              style={{
                backgroundImage: `url(../../assets/images/image-3.svg)`,
              }}
            ></div>
            <div
              className="project_corousel-image ov-img"
              style={{
                backgroundImage: `url(../../assets/images/image-3.svg)`,
              }}
            ></div>
            <div
              className="project_corousel-image ov-img"
              style={{
                backgroundImage: `url(../../assets/images/image-3.svg)`,
              }}
            ></div>
          </div>
          <div className="project__links overall-btn">
            <Link to="#">See live</Link>
            <i class=" fa fa-github"></i>
          </div>
          <div className=" project__links overall-btn">
            <Link to="#"> See source</Link>
            <i class="fa fa-external-link"></i>
          </div>
        </div>
        <div className="project-description">
          <h1>Well-paid-geek-Bot</h1>
          <div className="stack-container">
            <div className="portfolio__item-stack"> HTML/CSS</div>
            <div className="portfolio__item-stack"> Ruby on Rails</div>
            <div className="portfolio__item-stack">Javascript</div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            magnam, accusamus quam excepturi mollitia et reiciendis qui
            accusantium consectetur quaerat quos maiores tempora, ad blanditiis
            sit hic minima nihil saepe?
          </p>
        </div>
      </div>
    </div>
  );
}