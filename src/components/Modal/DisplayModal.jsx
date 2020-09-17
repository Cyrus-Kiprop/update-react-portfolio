import React from 'react';
import Radium, { StyleRoot } from 'radium';

import styles from '../animation';

import './DisplayModal.css';
import zoomIn from 'react-animations/lib/zoom-in';

export default function DisplayModal({ show, children }) {
  const showHideClassName = show ? ' show' : ' hide fadeOut ';
  return (
    <>
      <StyleRoot>
        <div
          className={`${showHideClassName} modal`}
          style={styles.animationGenerator(0.5, zoomIn)}
        >
          <section className="modal-main">{children}</section>
        </div>
      </StyleRoot>
    </>
  );
}
