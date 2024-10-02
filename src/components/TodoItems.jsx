import TodoItem from "./TodoItem";
function TodoItems({ todoItems, onDeleteButton }) {
  if (!todoItems) {
    return <div>no todo item</div>;
  }
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          todoname={item.name}
          todoDate={item.dueDate}
          onDeleteButton={onDeleteButton}
        ></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;
