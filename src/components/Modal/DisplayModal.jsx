import React from "react";
import Radium, { StyleRoot } from "radium";

import styles from "../animation";

import "./DisplayModal.css";
import zoomIn from "react-animations/lib/zoom-in";

export default function DisplayModal({ handleClose, show, children }) {
  const showHideClassName = show ? " show" : " hide ";
  return (
    <>
      <div className={`${showHideClassName} modal-overlay`}></div>
      <StyleRoot>
        <div
          className={`${showHideClassName} modal`}
          style={styles.animationGenerator(1, zoomIn)}
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
