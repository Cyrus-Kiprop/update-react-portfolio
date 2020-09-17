import React, { useRef, useState } from 'react';

import './DisplayProject.css';

export default function DisplayProject({ handleClose, project }) {
  const [state, setState] = useState(() => project);
  const mainImg = useRef();

  const changePhoto = (url) => {
    setState({ ...state, url: url });
    console.log('clicked');
  };

  return (
    <div className="modal-content">
      <div
        className="project__img"
        ref={mainImg}
        style={{
          backgroundImage: `url(${state.url})`,
        }}
      ></div>
      <div className="project-info">
        <div className="image-show">
          <div className="project__corousel">
            {state.exUrl.map((url) => {
              return (
                <div
                  className="project_corousel-image ov-img"
                  onClick={() => changePhoto(url)}
                  style={{
                    backgroundImage: `url(${url})`,
                  }}
                ></div>
              );
            })}
          </div>
          <div>
            <div className="project__links overall-btn">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`${project.live}`}
              >
                See live
              </a>
              <i class=" fa fa-github"></i>
            </div>
            <div className=" project__links overall-btn">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                See source
              </a>
              <i class="fa fa-external-link"></i>
            </div>
          </div>
        </div>
        <div className="project-description">
          <h1> {project.name}</h1>
          <div className="stack-container">
            {project.stack.map((stack) => {
              return <div className="portfolio__item-stack">{stack}</div>;
            })}
          </div>
          <p>{project.description}</p>
        </div>
      </div>
      <button onClick={handleClose} className="close-modal">
        Close
      </button>
    </div>
  );
}
