import "./Aside.scss";
import Modal from "../Modal";

const Aside = ({
  boards,
  isModalOpen,
  onOpenModal,
  onCloseModal,
  onAddBoard,
  onChange,
  value
}) => (
  <aside className="aside">
    <div>
      {boards.map((board) => <p key={board.id}>{board.title}</p>)}
    </div>
    <button onClick={onOpenModal}>+ Create New Board</button>
    <Modal isOpen={isModalOpen} onClose={onCloseModal}>
    <form onSubmit={onAddBoard}>
        <label>
          <input type="text" onChange={onChange} value={value} />
        </label>
        <label>
          <input type="submit" value="+ Create New Board"/>
        </label>
      </form>
    </Modal>
  </aside>
);

export default Aside;
