import ToDoItem from "./ToDoItem";
import React from "react";

const ToDoList = ({ todos, setTodos }) => {
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todoName={todo.name}
          onDelete={() => handleDelete(todo.id)}
        />
      ))}
    </div>
  );
};

export default ToDoList;
