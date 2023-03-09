import { createPortal } from "react-dom";
import "./Modal.scss";

const modalEl = document.getElementById("modal");

const Modal = ({ isOpen, onClose, children, onModalAperranceEnd, isModalContentVisible}) => (
  createPortal(
    !isOpen ? null : (
      <div onAnimationEnd={onModalAperranceEnd} className="modal" tabIndex={0}>
        <div className="modal__content" data-visible={isModalContentVisible}>
          <button onClick={onClose}>Close modal</button>
          {children}
        </div>
      </div>
    ), modalEl)
);

export default Modal;
