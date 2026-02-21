import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskList({ filter }) {
  const { tasks, toggleComplete } = useContext(TaskContext);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredTasks.map(task => (
        <li key={task.id}>
          <button
            onClick={() => toggleComplete(task.id)}
            data-testid={task.id.toString()}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.completed ? "Undo" : task.title}
          </button>
        </li>
      ))}
    </ul>
  );
}