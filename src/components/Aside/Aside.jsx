import "./Aside.scss";
import Modal from "../Modal";

const Aside = ({boards, isModalOpen, onOpenModal, onCloseModal, onAddBoard}) => (
  <aside className="aside">
    <button onClick={onOpenModal}>+ Create New Board</button>
    <Modal isOpen={isModalOpen}></Modal>
  </aside>
);

export default Aside;
