import React from "react";

export default function Phonetic(props) {
  if (props.phonetic.audio.length) {
    return (
      <div>
        <a href={props.phonetic.audio} target="_blank">
          Listen
        </a>
        {props.phonetic.text}
      </div>
    );
  } else {
    return <div>{props.phonetic.text}</div>;
  }
}
