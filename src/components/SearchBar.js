import React, { useRef } from "react";

const SearchBar = ({ setCity }) => {
  let inputField = useRef("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setCity(inputField.current.value);
      }}
    >
      <input
        ref={inputField}
        type="text"
        className="form-control my-3"
        placeholder="search ......"
      />
    </form>
  );
};

export default SearchBar;
