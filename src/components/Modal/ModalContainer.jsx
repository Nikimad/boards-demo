import { useCallback, useEffect } from "react";
import Modal from "./Modal";

const ModalContainer = ({ status, onHide, onClose, children }) => {
  const handleEscape = useCallback(
    (e) => {
      if (e.key === "Escape" && status === "show") onHide();
    },
    [onHide]
  );
  const handleContentClick = (e) => e.stopPropagation();

  useEffect(() => {
    let timeout;
    if (status === "hidden") {
      timeout = setTimeout(onClose, 200);
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose, handleEscape]);

  return (
    <Modal
      status={status}
      onHide={onHide}
      onContentClick={handleContentClick}
      children={children}
    />
  );
};

export default ModalContainer;
