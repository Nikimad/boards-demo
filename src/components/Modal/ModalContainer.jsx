import { useCallback, useEffect } from "react";
import Modal from "./Modal";

const ModalContainer = ({ isOpen, onClose, children }) => {
  const handleEscape = useCallback(({ key }) => {
    if (key === "Escape") return onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [handleEscape]);

  return <Modal isOpen={isOpen} onClose={onClose} children={children} />
};

export default ModalContainer;
