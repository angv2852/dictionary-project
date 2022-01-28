import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [input, setInput] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${input}`);
  }

  function handleInput(event) {
    setInput(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleInput}
          autoFocus={true}
          placeholder="Search for a word"
        />
      </form>
    </div>
  );
}
