import { useSelector } from "react-redux";
import useAction from "../../hooks/useAction";
import useModal from "../../hooks/useModal";
import { selectBoards } from "../../models/boards/selectors";
import Aside from "./Aside";

const AsideContainer = () => {
    const boards = useSelector(selectBoards);
    // const handleAddBoard = useAction();
    const [isModalOpen, handleOpen, handleClose] = useModal();

    return <Aside  
      boards={boards}
      isModalOpen={isModalOpen}
      onOpenModal={handleOpen}
      onCloseModal={handleClose}
      //onAddBoard={handleAddBoard}
    />;
};

export default AsideContainer;
