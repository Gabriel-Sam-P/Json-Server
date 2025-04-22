// import React from 'react'
// import {Button }from '@mui/material'
// import { useState } from 'react'


// const Todolist = () => {

//     const [input,setinput]=useState("")
//     const [todos, setTodos] = useState([])

//     const handleinput=(event)=>{
//         setinput(event.target.value)
//     }

//     const handletodo=()=>{
//         setTodos("")
//     }
//   return (
//     <div>
//       <input type="text" onChange={handleinput} placeholder='type the name' />
//       <Button onClick={input}>Sumbit</Button>
//       <p>
//         <ul>
//             {handletodo}<Button>edit</Button><Button>delete</Button>
//         </ul>
//       </p>
//     </div>
//   )
// }

// export default Todolist;






































// import React, { useState } from 'react';
// import { Button } from '@mui/material';

// const Todolist = () => {
//   const [input, setInput] = useState('');
//   const [todos, setTodos] = useState([]);

//   // Handle input change
//   const handleInput = (event) => {
//     setInput(event.target.value);
//   };

//   // Add todo to the list
//   const handleTodo = () => {
//     if (input.trim()) {
//       setTodos([...todos, input]);
//       setInput(''); // Clear the input after adding
//     }
//   };

//   // Delete todo from the list
//   const handleDelete = (index) => {
//     setTodos(todos.filter((_, i) => i !== index));
//   };

//   // Edit todo
//   const handleEdit = (index) => {
//     const newTodo = prompt('Edit your todo', todos[index]);
//     if (newTodo) {
//       const updatedTodos = [...todos];
//       updatedTodos[index] = newTodo;
//       setTodos(updatedTodos);
//     }
//   };

//   return (
//     <div>
//       <input 
//         type="text" 
//         value={input} 
//         onChange={handleInput} 
//         placeholder="Type a new todo" 
//       />
//       <Button onClick={handleTodo}>Submit</Button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <Button onClick={() => handleEdit(index)}>Edit</Button>
//             <Button onClick={() => handleDelete(index)}>Delete</Button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Todolist;
































import React, { useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';

const Todolist = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  // Handle input change
  const handleInput = (event) => {
    setInput(event.target.value);
  };

  // Handle adding a new todo (POST)
  const handleAddTodo = () => {
    if (input.trim() === '') return; // Don't add empty todo

    const newTodo = { title: input };

    axios.post('https://jsonplaceholder.typicode.com/posts', newTodo)
      .then((response) => {
        setTodos([...todos, { id: response.data.id, title: response.data.title }]);
        setInput(''); // Clear input field
      })
      .catch((error) => {
        console.error('Error adding todo', error);
      });
  };

  // Handle deleting a todo (DELETE)
  const handleDeleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        setTodos(todos.filter(todo => todo.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting todo', error);
      });
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Type the name"
      />
      <Button onClick={handleAddTodo}>Submit</Button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <Button onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
