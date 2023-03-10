import "./Aside.scss";
import Modal from "../Modal";

const Aside = ({
  boards,
  modalSatus,
  showModal,
  hideModal,
  closeModal,
  onAddBoard,
  onChange,
  value
}) => (
  <aside className="aside">
    <div>
      {boards.map((board) => <p key={board.id}>{board.title}</p>)}
    </div>
    <button onClick={showModal}>+ Create New Board</button>
    <Modal status={modalSatus} onHide={hideModal} onClose={closeModal}>
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
