import { useState } from "react";
import { useSelector } from "react-redux";
import useAction from "../../hooks/useAction";
import useModal from "../../hooks/useModal";
import { selectBoards } from "../../models/boards/selectors";
import { addBoard } from "../../models/boards/boardsSlice";
import Aside from "./Aside";

const AsideContainer = () => {
  const [value, setValue] = useState("");
  const boards = useSelector(selectBoards);
  const dispatchAddBoard = useAction(addBoard(value));
  const handleAddBoard = (e) => {
    e.preventDefault();
    dispatchAddBoard();
    setValue("");
    handleClose();
  };
  const [isModalOpen, handleOpen, handleClose] = useModal();
  const handleChange = (e) => setValue(e.target.value);

  return (
    <Aside
      boards={boards}
      isModalOpen={isModalOpen}
      onOpenModal={handleOpen}
      onCloseModal={handleClose}
      onAddBoard={handleAddBoard}
      onChange={handleChange}
      value={value}
    />
  );
};

export default AsideContainer;
