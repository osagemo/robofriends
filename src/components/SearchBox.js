import React from "react";

export default function SearchBox({ searchField, searchChange }) {
  console.log("SearchBox");
  return (
    <div className="pa2">
      <input
        aria-label="Search robots"
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
}
