import React from "react";
import "./Definition.css";

export default function Definition(props) {
  return (
    <div>
      <p className="part-of-speech ubuntu">{props.data.partOfSpeech}</p>
      {props.data.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <ul>
              <li className="definition ubuntu">{definitions.definition}</li>
              <p className="example ubuntu">{definitions.example}</p>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
