import React from "react";

export default function SearchBar({ setFilter }) {
  return (
    <input
      data-testid="search-input"
      placeholder="Search tasks..."
      type="text"
      onChange={(e) => setFilter(e.target.value)}
    />
  );
}