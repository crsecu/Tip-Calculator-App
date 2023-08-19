import React, { useState } from "react";
import "../styles/billDetails.css";

export default function BillDetails(props) {
  return (
    <div>
      <input
        className={`bill-details__input ${props.inputIcon}`}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        min={props.min} 
        name={props.name}
        value={props.value}
        onChange={props.changingState}
        onKeyDown={props.handleKeyDown}
      ></input>
      {props.handleError === 0 && <span>Can't be 0.</span>}
    </div>
  );
}
