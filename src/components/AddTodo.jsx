import { useState } from "react";
import style from "./AddTodo.module.css";
function AddTodo({ onNewItem }) {
  const [todoName, settodoName] = useState("");
  const [todoDate, settodoDate] = useState("");
  const handletodoName = (event) => {
    settodoName(event.target.value);
  };
  const handletodoDate = (event) => {
    settodoDate(event.target.value);
  };
  const handleAddButtonOnClick = () => {
    onNewItem(todoName, todoDate);
    settodoName("");
    settodoDate("");
  };
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            className={`${style.input}`}
            onChange={handletodoName}
            value={todoName}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handletodoDate} value={todoDate} />
        </div>
        <div className="col-2">
          <button
            onClick={handleAddButtonOnClick}
            className={`btn btn-success ${style.Btn}`}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
