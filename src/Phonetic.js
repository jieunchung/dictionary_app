import React from "react";

export default function Phonetic(props) {
  if (props.phonetic.audio.length) {
    return (
      <div>
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}
