import React from "react";
import Definition from "./Definition";
import Phonetic from "./Phonetic";

export default function Info(props) {
  if (props.data) {
    return (
      <div>
        <div className="card-body">
          <h2 className="word ubuntu w700">{props.data.word}</h2>
          {props.data.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </div>
        <hr />
        {props.data.meanings.map(function (definition, index) {
          return (
            <div className="card-body" key={index}>
              <Definition data={definition} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
