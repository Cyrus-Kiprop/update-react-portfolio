import React from "react";

import "./DisplayModal.css";

export default function DisplayModal({ handleClose, show, children }) {
  const showHideClassName = show ? " show" : " show ";
  return (
    <>
      <div className={`${showHideClassName} modal-overlay`}></div>
      <div className={`${showHideClassName} modal`}>
        <section className="modal-main">
          {children}
          <button onClick={() => handleClose()}>close</button>
        </section>
      </div>
    </>
  );
}
