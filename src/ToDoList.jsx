import ToDoItem from "./ToDoItem";
import React from "react";

const ToDoList = ({ todos, handleDelete }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todoName={todo.name}
          handleDelete={() => handleDelete(todo.id)}
        />
      ))}
    </div>
  );
};

export default ToDoList;
