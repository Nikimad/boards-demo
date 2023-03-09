import { createPortal } from "react-dom";
import "./Modal.scss";

const modalEl = document.getElementById("modal");

const Modal = ({isOpen, onClose, children}) => {
    const modalContent = !isOpen ? null : (
      <div className="modal">
        <div className="modal__content">
          { children }
        </div>
      </div>
    );

    return createPortal(modalContent, modalEl);
};

export default Modal;
