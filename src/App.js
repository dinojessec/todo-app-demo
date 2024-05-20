import "./App.css";
import { useState } from "react";
import Label from "./components/Label/Label";
import InputTodo from "./components/InputTodo/InputTodo";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleOnChangeInput = (e) => {
    const { value } = e.target;
    setTodoInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoInput) return;
    // add todoInput here
    const timestamp = Date.now();
    setTodoList((prevState) => [
      ...prevState,
      { label: todoInput, id: `${timestamp}-${todoInput}`, isComplete: false },
    ]);
    // reset todoInput here
    setTodoInput("");
  };

  const handleComplete = (id) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  return (
    <div className="App">
      <Label>Todo app</Label>
      <form onSubmit={handleSubmit}>
        <InputTodo handleOnChangeInput={handleOnChangeInput} todoInput={todoInput} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todoList.map((todo) => (
          <div key={todo.id}>
            <li>{todo.label}</li>
            <input type="checkbox" onChange={() => handleComplete(todo.id)} checked={todo.isComplete} />
            <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
              delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
