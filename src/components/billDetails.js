import React, { useState } from "react";

export default function BillDetails(props) {
  return (
    <div>
      <input
        type={props.type}
        min={props.min} 
        name={props.name}
        value={props.value}
        onChange={props.changingState}
        onKeyDown={props.handleKeyDown}
      ></input>
    </div>
  );
}
