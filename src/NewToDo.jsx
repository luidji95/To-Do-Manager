import React, { useState } from "react";

function NewToDo({ addToDo, onCancel }) {
  const [newToDo, setNewToDo] = useState("");

  return (
    <div className="new-todo">
      <form onSubmit={(e) => addToDo(e, newToDo)}>
        <input
          type="text"
          placeholder="Enter new task"
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
        />
        <button className="add-todo-btn" type="submit">
          Submit
        </button>
        <button className="cancle-btn" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default NewToDo;
