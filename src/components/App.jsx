import React, { useState } from "react";
import TaskForm from "./TaskForm";
import SearchBar from "./SearchBar";
import TaskList from "./TaskList";

export default function App() {
  const [filter, setFilter] = useState("");

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "1rem",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Task Manager</h1>
      <TaskForm />
      <SearchBar setFilter={setFilter} />
      <TaskList filter={filter} />
    </div>
  );
}