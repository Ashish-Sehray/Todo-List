import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Message from "./components/Message";
import { useState } from "react";
function App() {
  const [todoItems, settodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    let newItem = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    settodoItems(newItem);
  };
  const handleDeleteItem = (todoItemName) => {
    const newItem = todoItems.filter((item) => item.name != todoItemName);
    settodoItems(newItem);
    console.log(todoItemName);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 ? <Message></Message> : null}
      <TodoItems
        todoItems={todoItems}
        onDeleteButton={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
