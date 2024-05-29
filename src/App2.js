import React, { useState } from 'react';

// MUI components
import { Stack } from '@mui/material';
import Button from "./components/Button/Button";
import Checkbox from './components/Checkbox/Checkbox';
import Input from "./components/Input/Input";
import Typography from './components/Typography/Typography';


const App2 = () => {
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
    <>
      <Typography variant="h5">Todo App</Typography>
      <form onSubmit={handleSubmit}>
        <Stack display="flex" direction="row" gap={2}>
          <Input handleOnChangeInput={handleOnChangeInput} value={todoInput} />
          <Button type="submit" variant="contained">Add</Button>
        </Stack>
      </form>
      <ul>
        {todoList.map((todo) => (
          <div key={todo.id}>
            <Stack display="flex" direction="row" gap={1}>
              <Checkbox id={todo.id} on label={todo.label} checked={todo.isComplete}
                onChange={() => handleComplete(todo.id)}
              />
              <Button variant="contained" onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>

            </Stack>
          </div>
        ))}
      </ul>
    </>
  )
}

export default App2;