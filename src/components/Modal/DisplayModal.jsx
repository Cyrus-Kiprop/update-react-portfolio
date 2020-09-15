import React from "react";
import Radium, { StyleRoot } from "radium";

import styles from "../animation";

import "./DisplayModal.css";
import zoomIn from "react-animations/lib/zoom-in";
import fadeOut from "react-animations/lib/zoom-in";

export default function DisplayModal({ handleClose, show, children }) {
  const showHideClassName = show ? " show" : " hide fadeOut ";
  return (
    <>
      <div className={`${showHideClassName} modal-overlay`}></div>
      <StyleRoot>
        <div
          className={`${showHideClassName} modal`}
          style={
            show
              ? styles.animationGenerator(1, zoomIn)
              : styles.animationGenerator(1, fadeOut)
          }
        >
          <section className="modal-main">
            {children}
            <button
              className="modal-btn-close"
              onClick={() => handleClose()}
            ></button>
          </section>
        </div>
      </StyleRoot>
    </>
  );
}
