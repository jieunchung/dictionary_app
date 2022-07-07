import React from "react";
import Definition from "./Definition";
import Phonetic from "./Phonetic";

export default function Info(props) {
  if (props.data) {
    return (
      <div>
        <div className="section">
          <h2 className="word ubuntu w700">{props.data.word}</h2>
          {props.data.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </div>
        {props.data.meanings.map(function (definition, index) {
          return (
            <div className="section" key={index}>
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
