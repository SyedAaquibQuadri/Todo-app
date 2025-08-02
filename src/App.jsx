import "./App.css";
import React, { useState } from "react";
import InputContainer from "./components/inputContainer";
import TodoContainer from "./components/TodoContainer";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (inputVal.trim() !== "") {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal("");
    }
  }

  function deleteTodo(indexToRemove) {
    setTodos((prevTodos) =>
      prevTodos.filter((_, index) => index !== indexToRemove)
    );
  }

  return (
    <main>
      <h1>To Do List</h1>

      <InputContainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />

      {todos.length > 0 && (
        <TodoContainer todos={todos} deleteTodo={deleteTodo} />
      )}
    </main>
  );
}

export default App;
