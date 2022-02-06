import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary() {
  let [input, setInput] = useState("");
  let [results, setResults] = useState("");
  let [photos, setPhotos] = useState("");

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://api.dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001b4b315ea79d84e2e9ea76ffa6f371fa5";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${input}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
