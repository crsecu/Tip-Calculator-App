import React, { useState } from "react";

export default function BillDetails(props) {
  return (
    <div>
      <input
        min="1"
        type="number"
        name={props.name}
        value={props.value}
        onChange={props.changingState}
        onKeyDown={props.onKeyDown}
      ></input>
    </div>
  );
}
