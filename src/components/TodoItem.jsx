import styles from "./TodoItem.module.css";
function TodoItem({ todoname, todoDate, onDeleteButton }) {
  return (
    <div className={`container ${styles.itemContainer}`}>
      <div className="row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{todoDate}</div>
        <div className={`col-2 ${styles.deleteBtn}`}>
          <button
            className={`btn-danger btn ${styles.Btn}`}
            onClick={() => onDeleteButton(todoname)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
