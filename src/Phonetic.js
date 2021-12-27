import React from "react";
import ReactPlayer from "react-player";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <ReactPlayer url={props.phonetic.audio} playing />

      <br />
      {props.phonetic.text}
    </div>
  );
}
