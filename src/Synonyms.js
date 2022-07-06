import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms ubuntu">
        {props.synonyms.map(function (synonym, index) {
          return (
            <ul>
              <li className="synonym-li" key={index}>
                {synonym}
              </li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
