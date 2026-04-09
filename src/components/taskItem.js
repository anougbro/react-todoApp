import React from "react";

const TaskItem = ({ task, toggleComplete, deleteTask, setTaskToEdit }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <div className="actions">
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => setTaskToEdit(task)}>Edit</button>
        <button onClick={() => {
          if (window.confirm("Are you sure you want to delete this task?")) {
            deleteTask(task.id);
          }
        }}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
