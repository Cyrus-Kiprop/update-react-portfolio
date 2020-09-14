import React from "react";

import "./DisplayProject.css";
import projectImg from "../../assets/images/project-preview.svg";
import { Link } from "react-router-dom";

import img3 from "../../assets/images/image-3.svg";
import img4 from "../../assets/images/image-4.svg";
import img5 from "../../assets/images/image-5.svg";

export default function DisplayProject() {
  return (
    <div class="modal-guts">
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
                  backgroundImage: `url(${img4})`,
                }}
              ></div>
              <div
                className="project_corousel-image ov-img"
                style={{
                  backgroundImage: `url(${img4})`,
                }}
              ></div>
              <div
                className="project_corousel-image ov-img"
                style={{
                  backgroundImage: `url(${img5})`,
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
              accusantium consectetur quaerat quos maiores tempora, ad
              blanditiis sit hic minima nihil saepe?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
