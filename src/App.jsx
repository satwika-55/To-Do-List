import React, { useState } from "react";
import Todo from "./Todo";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, isEditing: false }]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, updatedText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: updatedText, isEditing: false } : task
      )
    );
  };

  const toggleEdit = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task) => (
          <Todo
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
            toggleEdit={toggleEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
