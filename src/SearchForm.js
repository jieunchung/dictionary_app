import React, { useState } from "react";
import axios from "axios";
import "./SearchForm.css";
import Info from "./Info";

export default function SearchForm() {
  const [keyword, setKeyword] = useState("language");
  const [info, setInfo] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setInfo(response.data[0]);
  }

  function search() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    //--documentation= https://api.dictionaryapi.dev/api/v2/entries/en/nature--//
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div>
        <div className="form-container">
          <form className="form-group mx-sm-3 mb-2" onSubmit={handleSubmit}>
            <i className="material-symbols-outlined icon">search</i>
            <input
              className="form-control form-input "
              type="search"
              placeholder={keyword}
              onChange={handleChange}
            ></input>
            <small className="hints">
              e.g. ambiguous, pique, tangible, hoist
            </small>
          </form>
        </div>
        <Info data={info} />
      </div>
    );
  } else {
    load();
    return "Searching";
  }
}
