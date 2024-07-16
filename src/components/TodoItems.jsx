import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

function TodoItems({ todoItems, handleDeleteItem }) {
  return (
    <div className={`${styles.itemsContainer}`}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.todoName}
          todoName={item.todoName}
          todoDate={item.todoDate}
          handleDeleteItem={handleDeleteItem}
        />
      ))}
    </div>
  );
}

export default TodoItems;
