import { useState } from "react";
import { useSelector } from "react-redux";
import useAction from "../../hooks/useAction";
import useModal from "../../hooks/useModal";
import { selectBoards } from "../../models/boards/selectors";
import { addBoard } from "../../models/boards/boardsSlice";
import Aside from "./Aside";

const AsideContainer = () => {
  const [value, setValue] = useState("");
  const [modalSatus, hideModal, showModal, closeModal] = useModal();
  const boards = useSelector(selectBoards);
  const dispatchAddBoard = useAction(addBoard(value));
  const handleAddBoard = (e) => {
    e.preventDefault();
    dispatchAddBoard();
    setValue("");
    hideModal();
  };
  const handleChange = (e) => setValue(e.target.value);

  return (
    <Aside
      boards={boards}
      modalSatus={modalSatus}
      showModal={showModal}
      hideModal={hideModal}
      closeModal={closeModal}
      onAddBoard={handleAddBoard}
      onChange={handleChange}
      value={value}
    />
  );
};

export default AsideContainer;
