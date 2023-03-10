import { createPortal } from "react-dom";
import "./Modal.scss";

const modalEl = document.getElementById("modal");

const Modal = ({ status, onHide, onContentClick, children }) =>
  createPortal(
    status === "close" ? null : (
      <div className="modal" data-status={status} onClick={onHide}>
        <div className="modal__content" onClick={onContentClick}>
          <button onClick={onHide}>Close modal</button>
          {children}
        </div>
      </div>
    ),
    modalEl
  );

export default Modal;
