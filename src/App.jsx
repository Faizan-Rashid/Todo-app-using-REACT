import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";

function App() {
  const inittodoItems = [
    // {
    //   todoName: "buy milk",
    //   todoDate: "20/02/2023",
    // },
    // {
    //   todoName: "go to college",
    //   todoDate: "10/03/2024",
    // },
  ];

  const [todoItems, setTodoItems] = useState(inittodoItems);

  const handleAddTodo = (ItemName, itemDate) => {
    const newTodoItems = [
      ...todoItems,
      {
        todoName: ItemName,
        todoDate: itemDate,
      },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteTodo = (todoName, todoDate) => {
    const newTodoItems = todoItems.filter((item) => {
      if (item.todoDate !== todoDate && item.todoName !== todoName) return item;
    });
    setTodoItems(newTodoItems);
  };

  return (
    <center className="container">
      <Appname />
      <Addtodo onAddingItem={handleAddTodo} />
      {todoItems.length === 0 ? (
        <WelcomeMessage />
      ) : (
        <TodoItems todoItems={todoItems} handleDeleteItem={handleDeleteTodo} />
      )}
    </center>
  );
}

export default App;
