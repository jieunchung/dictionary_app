import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <div className="form-container">
      <form className="form-group mx-sm-3 mb-2">
        <input
          className="form-control form-input"
          type="search"
          placeholder="nature"
        ></input>
        <small className="hints">e.g. summer, kitten, flower, hiking</small>
      </form>
    </div>
  );
}
