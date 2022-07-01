import React from "react";

export default function Info(props) {
  if (props.data) {
    return (
      <div>
        <h4>{props.data.word}</h4>
      </div>
    );
  } else {
    return null;
  }
}
