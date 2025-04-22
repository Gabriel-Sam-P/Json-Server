import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateUser = () => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    axios.get('http://localhost:3001/posts/3')
      .then(res => setUser(res.data))
      .catch(err => console.error("Error fetching user:", err));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    axios.put('http://localhost:3001/posts/3', user)
      .then(res => {
        console.log("Updated successfully:", res.data);
      })
      .catch(err => console.error("Error updating user:", err));
  };

  return (
    <form onSubmit={handleUpdate}>
      <input 
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input 
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <button type="submit">Update User</button>
    </form>
  );
};

export default UpdateUser;