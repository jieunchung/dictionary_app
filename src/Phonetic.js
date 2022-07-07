import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio.length) {
    return (
      <div>
        <a
          className="audio"
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
        >
          Listen
        </a>
        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}
