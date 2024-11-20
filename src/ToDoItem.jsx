function ToDoItem({ todoName, handleDelete }) {
  return (
    <div className="todo-container">
      <p>{todoName}</p>
      <button className="delete-todo" onClick={handleDelete}>
        Delete
      </button>
      <input type="checkbox" />
    </div>
  );
}

export default ToDoItem;
