import React, { useState } from "react";

const Todo = ({ task, deleteTask, updateTask, toggleEdit }) => {
  const [updatedText, setUpdatedText] = useState(task.text);

  return (
    <li style={{ margin: "10px 0" }}>
      {task.isEditing ? (
        <>
          <input
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
          <button onClick={() => updateTask(task.id, updatedText)}>Save</button>
          <button onClick={() => toggleEdit(task.id)}>Cancel</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={() => toggleEdit(task.id)} style={{ marginLeft: "10px" }}>
            Edit
          </button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default Todo;
