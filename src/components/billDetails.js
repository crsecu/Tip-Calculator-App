import React, { useState } from "react";
import "../styles/billDetails.css";
import iconDollar from "../images/icon-dollar.svg"

export default function BillDetails(props) {
  return (
    <div className="">
      <input
        className="bill-details__input"
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
