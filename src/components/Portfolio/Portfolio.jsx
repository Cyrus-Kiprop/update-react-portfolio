import React, { useState, useEffect } from 'react';
import { StyleRoot } from 'radium';
import Modal from 'react-modal';

import './Portfolio.css';

import DisplayProject from './DisplayProject';
import styles from '../animation';
import zoomIn from 'react-animations/lib/zoom-in';
import projects from '../../data';

export default function Portfolio() {
  const [show, setShow] = useState(false);
  useEffect(() => {});

  const showModal = (event) => {
    event.preventDefault();
    setShow(true);
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
  };

  const hideModal = (event) => {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    setShow(false);
  };

  return (
    <StyleRoot>
      <section className="portfolio">
        <h1 className="section_title">My Portfolio</h1>
        <div className="portfolio__items">
          {projects.map((project) => {
            return (
              <div className="portfolio__item">
                <div
                  style={{
                    background: `linear-gradient( 180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 98.35%),url(${project.url})`,
                  }}
                  className="portfolio__item-img"
                >
                  <h2>{project.name}</h2>
                  <div
                    className="stack-gutter"
                    style={styles.animationGenerator(1, zoomIn)}
                  >
                    <div className="stack-container">
                      {project.stack.map((stack) => {
                        return (
                          <div className="portfolio__item-stack">{stack}</div>
                        );
                      })}
                    </div>
                    <button
                      type="button"
                      onClick={showModal}
                      className="overall-btn"
                    >
                      See the project
                    </button>
                    <Modal isOpen={show}>
                      <DisplayProject
                        project={project}
                        handleClose={hideModal}
                      />
                    </Modal>
                  </div>
                  <img src="" alt="" />
                </div>
                <div className="stack-container">
                  {project.stack.map((stack) => {
                    return <div className="portfolio__item-stack">{stack}</div>;
                  })}
                </div>
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
