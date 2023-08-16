import React, { useState } from "react";

export default function BillDetails(props) {
  return (
    <div>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        min={props.min} 
        name={props.name}
        value={props.value}
        onChange={props.changingState}
        onKeyDown={props.handleKeyDown}
      ></input>
      {props.handleError === "" && <span>Can't be 0.</span>}
    </div>
  );
}
