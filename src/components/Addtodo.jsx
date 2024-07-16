import { useState } from "react";

function Addtodo({ onAddingItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleTodoName = (e) => {
    setTodoName(e.target.value);
  };

  const handleTodoDate = (e) => {
    setTodoDate(e.target.value);
  };

  const handleBtnClick = () => {
    onAddingItem(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <input
            value={todoName}
            type="text"
            placeholder="Enter to do here"
            onChange={(e) => {
              handleTodoName(e);
            }}
          />
        </div>
        <div className="col-sm-3">
          <input
            value={todoDate}
            type="date"
            onChange={(e) => {
              handleTodoDate(e);
            }}
          />
        </div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleBtnClick}
          >
            Add task
          </button>
        </div>
      </div>
    </div>
  );
}
export default Addtodo;
