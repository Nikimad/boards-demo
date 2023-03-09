import { useState } from "react";
import Modal from "./Modal";

const ModalContainer = (props) => {
    const [isModalContentVisible, setIsModalContentVisible] = useState(false);
    const handleModalAperranceEnd = () => setIsModalContentVisible(true);

    return <Modal { ...props } 
      onModalAperranceEnd={handleModalAperranceEnd}
      isModalContentVisible={isModalContentVisible}
    />;
};

export default ModalContainer;
