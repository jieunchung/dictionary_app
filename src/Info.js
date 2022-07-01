import React from "react";
import Definition from "./Definition";

export default function Info(props) {
  if (props.data) {
    return (
      <div>
        <h2 className="word ubuntu w700">{props.data.word}</h2>
        {props.data.meanings.map(function (definition, index) {
          return (
            <div key={index}>
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
