import React, { useState } from "react";
import axios from "axios";
import "./SearchForm.css";
import Info from "./Info";
import Photos from "./Photos"

export default function SearchForm() {
  const [keyword, setKeyword] = useState("aesthetic");
  const [info, setInfo] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null)

  function handleResponse(response) {
    setInfo(response.data[0]);
  }

  function handlePexels(response){
    setPhotos(response.data.photos)
  }

  function search() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    //--documentation= https://api.dictionaryapi.dev/api/v2/entries/en/nature --//
    axios.get(apiUrl).then(handleResponse);


    //--documentation= https://www.pexels.com/api/ --//
    const pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`
    const pexelsApiKey = "563492ad6f91700001000001124cd31d6b5642cabb03d17c94cd7b08"
    axios.get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelsApiKey}` }}).then(handlePexels);
    
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
              e.g. supine, idyllic, ephemeral, aesthetic
            </small>
          </form>
        </div>
        <div className="card">
        <Info data={info} />
        <hr />
        <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading /find";
  }
}
