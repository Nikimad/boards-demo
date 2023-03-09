import { createPortal } from "react-dom";
import "./Modal.scss";

const modalEl = document.getElementById("modal");

const Modal = ({ isOpen, onClose, children }) => {
  const modalContent = !isOpen ? null : (
    <div className="modal" tabIndex={0}>
      <div className="modal__content">
        <button onClick={onClose}>Close modal</button>
        {children}
      </div>
    </div>
  );

  return createPortal(modalContent, modalEl);
};

export default Modal;
