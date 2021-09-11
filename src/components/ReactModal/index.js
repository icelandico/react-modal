import React from "react";
import PropTypes from "prop-types";
import "./index.css"

const defaultProps = {
  config: {
    title: "Default title",
    onBgClose: true,
  }
}

const ReactModal = ({ isOpen, closeHandler, config, modalContent }) => {
  const modalConfig = Object.assign({}, defaultProps.config, config);
  if (!isOpen) return null;

  return (
      <div className="modal__container" onClick={() => modalConfig.onBgClose ? closeHandler() : null}>
        <div className="modal__box" onClick={(e) => e.stopPropagation()}>
          <div className="modal__header">
            <div className="modal__header-title">{modalConfig.title}</div>
            <div className="modal__header-close" onClick={closeHandler}>X</div>
          </div>
          <div className="modal__content">{modalContent}</div>
          <div className="modal__footer">
            <button className="modal__footer-button modal__footer-button--close" onClick={closeHandler}>Close</button>
            <button className="modal__footer-button modal__footer-button--accept">Accept</button>
          </div>
        </div>
      </div>
  )
}

export default ReactModal

ReactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  modalContent: PropTypes.node,
  config: PropTypes.shape({
    title: PropTypes.string,
    onBgClose: PropTypes.bool,
  })
};

ReactModal.defaultProps = {
  config: {
    title: 'Default Title',
    onBgClose: true
  }
}
