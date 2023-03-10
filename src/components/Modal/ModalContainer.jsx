import { useState } from "react";
import Modal from "./Modal";

const ModalContainer = (props) => {
  const [animtionSatus, setAnimaionStatus] = useState("redy");

  const handleModalAperranceEnd = () => setAnimaionStatus("in");
  const handleClose = () => {
    props.onClose();
    setAnimaionStatus("redy");
  };
  const handleCloseAndAnimation = () => {
    setAnimaionStatus("out");
    setTimeout(handleClose, 200);
  };

  return <Modal 
    { ...props } 
    onModalAperranceEnd={handleModalAperranceEnd}
    onClose={handleCloseAndAnimation}
    animtionSatus={animtionSatus}
  />;
};

export default ModalContainer;
