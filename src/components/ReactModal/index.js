import React from "react";
import './index.css'

const ReactModal = ({ isOpen, closeHandler, children }) => {
  if (!isOpen) return null;

  return (
      <div className="modal__container">
        <div className="modal__box">
          <div className="modal__header">
            <div className="modal__header-title">Title</div>
            <div className="modal__header-close" onClick={closeHandler}>X</div>
          </div>
          <div className="modal__content">{children}</div>
          <div className="modal__footer">
            <button className="modal__footer-button modal__footer-button--close" onClick={closeHandler}>Close</button>
            <button className="modal__footer-button modal__footer-button--accept">Accept</button>
          </div>
        </div>
      </div>
  )
}

export default ReactModal
