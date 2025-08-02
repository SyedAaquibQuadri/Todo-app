import React from "react";
import Todo from "./Todo";

function TodoContainer({ todos, deleteTodo }) {
  return (
    <div className="container">
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} onDelete={() => deleteTodo(index)} />
      ))}
    </div>
  );
}

export default TodoContainer;
