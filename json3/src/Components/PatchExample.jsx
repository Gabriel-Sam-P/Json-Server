import React, { useState } from 'react';
import axios from 'axios';

const PatchExample = () => {
  const [newName, setNewName] = useState("");

  const handlePatch = () => {
    axios.patch('http://localhost:3001/posts/2', {
      name: newName
    })
    .then(response => {
      console.log("Updated User:", response.data);
      alert("Name updated successfully!");
    })
    .catch(error => {
      console.error("Error updating user:", error);
    });
  };

  return (
    <div>
      <h2>Update User Name (PATCH)</h2>
      <input
        type="text"
        placeholder="Enter new name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={handlePatch}>Update Name</button>
    </div>
  );
};

export default PatchExample;