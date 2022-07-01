import React from "react";

export default function Definition(props) {
  return (
    <div>
      <p className="part-of-speech">({props.data.partOfSpeech})</p>
      {props.data.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <p className="definition">{definitions.definition}</p>
            <p className="example">{definitions.example}</p>
          </div>
        );
      })}
    </div>
  );
}
