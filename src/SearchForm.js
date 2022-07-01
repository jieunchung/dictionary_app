import React, { useState } from "react";
import axios from "axios";
import "./SearchForm.css";

export default function SearchForm() {
  const [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="form-container">
      <form className="form-group mx-sm-3 mb-2" onSubmit={handleSubmit}>
        <input
          className="form-control form-input"
          type="search"
          placeholder="nature"
          onChange={handleChange}
        />
        <small className="hints">e.g. summer, kitten, flower, hiking</small>
      </form>
    </div>
  );
}
