import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    setResults(response.data[0]);
  }

  // documentation: https://dictionaryapi.dev

  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Dictionary">
      {" "}
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} autoFocus={true} />
      </form>{" "}
      <Results results={results} />
    </div>
  );
}
