import React from "react";

import "./DisplayModal.css";

export default function DisplayModal({ handleClose, show, children }) {
  const showHideClassName = show ? " show" : " hide ";
  return (
    <>
      <div className={`${showHideClassName} modal-overlay`}></div>
      <div className={`${showHideClassName} modal`}>
        <section className="modal-main">
          {children}
          <button
            className="modal-btn-close"
            onClick={() => handleClose()}
          ></button>
        </section>
      </div>
    </>
  );
}
