import { createPortal } from "react-dom";
import "./Modal.scss";

const modalEl = document.getElementById("modal");

const Modal = ({ isOpen, onClose, children, onModalAperranceEnd, animtionSatus}) => (
  createPortal(
    !isOpen ? null : (
      <div className="modal" data-animation={animtionSatus}>
        <div onClick={onClose} onAnimationEnd={onModalAperranceEnd} className="modal__backdrop"></div>
        <div className="modal__content">
          <button onClick={onClose}>Close modal</button>
          {children}
        </div>
      </div>
    ), modalEl)
);

export default Modal;
