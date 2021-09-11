import React from "react";
import PropTypes from "prop-types";
import "./index.css"

const defaultProps = {
  config: {
    title: "Default title",
    onBgClose: true,
    footerDisabled: false,
  }
}

const ReactModal = ({ isOpen, closeHandler, config, modalContent }) => {
  const modalConfig = Object.assign({}, defaultProps.config, config);
  if (!isOpen) return null;

  const handleAsync = () => closeHandler()

  return (
      <div className="modal__container" onClick={() => modalConfig.onBgClose ? closeHandler() : null}>
        <div className="modal__box" onClick={(e) => e.stopPropagation()}>
          <div className="modal__header">
            <div className="modal__header-title">{modalConfig.title}</div>
            <div className="modal__header-close" onClick={closeHandler}>X</div>
          </div>
          <div className="modal__content">{modalContent}</div>
          {
            !modalConfig.footerDisabled &&
            <div className="modal__footer">
              <button className="modal__footer-button modal__footer-button--close" onClick={closeHandler}>Close</button>
              <button className="modal__footer-button modal__footer-button--accept" onClick={() => handleAsync()}>Accept</button>
            </div>
          }
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
    footerDisabled: PropTypes.bool,
  })
};

ReactModal.defaultProps = {
  config: {
    title: 'Default Title',
    onBgClose: true
  }
}
