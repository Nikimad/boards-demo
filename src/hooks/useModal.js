import { useState } from "react";

const useModal = () => {
  const [modalSatus, setModalStatus] = useState("close");
  const hideModal = () => setModalStatus("hidden");
  const showModal = () => setModalStatus("show");
  const closeModal = () => setModalStatus("close");

  return [modalSatus, hideModal, showModal, closeModal];
};

export default useModal;
