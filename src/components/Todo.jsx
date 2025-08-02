import React from "react";

function Todo({ todo, onDelete }) {
  return (
    <div className="todo">
      <p>{todo}</p>
      <div className="actions">
        <input type="checkbox" />
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
