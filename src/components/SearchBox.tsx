import React from "react";
import { RoboActionTypes } from "../types";

interface ISearchBoxProps {
  onSearchChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => RoboActionTypes;
}

const SearchBox: React.FC<ISearchBoxProps> = ({ onSearchChange }) => {
  return (
    <div className="pa2">
      <input
        aria-label="Search robots"
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
