import React, { useState } from "react";
import axios from "axios";
import "./SearchForm.css";
import Info from "./Info";

export default function SearchForm() {
  const [keyword, setKeyword] = useState("");
  const [info, setInfo] = useState(null);

  function handleResponse(response) {
    setInfo(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    //--documentation= https://api.dictionaryapi.dev/api/v2/entries/en/nature--//
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <div className="form-container">
        <form className="form-group mx-sm-3 mb-2" onSubmit={handleSubmit}>
          <input
            className="form-control form-input"
            type="search"
            placeholder="nature"
            onChange={handleChange}
          />
          <small className="hints">
            e.g. ambiguous, pique, tangible, hoist
          </small>
        </form>
      </div>
      <Info data={info} />
    </div>
  );
}
