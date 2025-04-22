import React, { useState } from 'react';

function Jsontodo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editInput, setEditInput] = useState('');

  // Add Todo
  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { text: input, id: Date.now() }]);
    setInput('');
  };

  // Edit Todo
  const startEditing = (index) => {
    setEditIndex(index);
    setEditInput(todos[index].text);
  };

  const saveEdit = () => {
    if (editInput.trim() === '') return;
    const updatedTodos = todos.map((todo, index) =>
      index === editIndex ? { ...todo, text: editInput } : todo
    );
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditInput('');
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {editIndex !== null && (
        <div className="edit-group">
          <input
            type="text"
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
          />
          <button onClick={saveEdit}>Save</button>
        </div>
      )}

      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => startEditing(index)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Jsontodo;
