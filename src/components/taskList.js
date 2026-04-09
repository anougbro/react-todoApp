import React from "react";
import TaskItem from "./taskItem";

const TaskList = ({ tasks, toggleComplete, deleteTask, setTaskToEdit }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks yet. Add one!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            setTaskToEdit={setTaskToEdit}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
