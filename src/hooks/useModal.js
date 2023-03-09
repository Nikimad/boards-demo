import { useState } from "react";

const useModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleIsModalOpen = () => setIsModalOpen(!isModalOpen);

    return [isModalOpen, toggleIsModalOpen];
};

export default useModal;
