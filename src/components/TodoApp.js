// TodoApp.js
import React, { useState } from 'react';
import TodoList from '../components/TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const addTodo = () => {
    if (inputText.trim() !== '') {
      setTodos([...todos, inputText]);
      setInputText('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>ToDoアプリ</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add a new ToDo"
      />
      <button onClick={addTodo}>Add</button>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoApp;
