import React from "react";
import "../styles/button.css";

export default function Button(props) {
  return (
    <button
      className={`tip-calc__button ${props.className}`}
      id={props.id}
      value={props.tip}
      onClick={props.handleClick}
      name={props.name}
    >
      {props.tip}%
    </button>
  );
}
