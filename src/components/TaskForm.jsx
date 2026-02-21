import { useState, useId, useContext } from 'react';
import { TaskContext } from "../context/TaskContext" ;

export default function TaskForm() {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const inputId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask({ title, completed: false });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={inputId}>New Task:</label>
      <input 
      id={inputId} 
      value={title} 
      onChange={e => setTitle(e.target.value)}
      placeholder="Add a new task..." 
      />
      <button type="submit">Add Task</button>
    </form>
  );
}