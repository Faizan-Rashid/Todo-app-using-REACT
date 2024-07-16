import "../App.css";

function TodoItem({ todoName, todoDate, handleDeleteItem }) {
  return (
    <div className="container m-t">
      <div className="row">
        <div className="col-sm-4">{todoName}</div>
        <div className="col-sm-3">{todoDate}</div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-danger button"
            onClick={() => {
              handleDeleteItem(todoName, todoDate);
              // console.log(`in handler, ${todoDate}`)
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
