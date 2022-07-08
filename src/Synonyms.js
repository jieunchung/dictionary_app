import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms ubuntu">
        {props.synonyms.map(function (synonym, index) {
          if (props.synonyms != null) {
            return (
              <ul key={index}>
                <li>{synonym}</li>
              </ul>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
