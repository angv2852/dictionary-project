import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
  let [input, setInput] = useState("");
  let [results, setResults] = useState("");

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://api.dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleInput(event) {
    setInput(event.target.value);
  }

  return (
    <div className="Dictionary">
      <p>What word would you like to search?</p>
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleInput}
            autoFocus={true}
            placeholder="Enter word here..."
          />
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
