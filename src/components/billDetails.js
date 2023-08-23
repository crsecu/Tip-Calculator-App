import React, { useState } from "react";
import "../styles/billDetails.css";

export default function BillDetails(props) {
  return (
    <div className="tip-calc__input-container">
      <input
        className={`bill-details__input ${props.inputIcon} ${props.handleError === 0 ? "tip-calc__input-errorOutline" : ""}`}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        min={props.min} 
        name={props.name}
        value={props.value}
        onChange={props.changingState}
        onKeyDown={props.handleKeyDown}
      ></input>
      {props.handleError === 0 && <span className="tip-calc__input-error">Can't be 0</span>}
    </div>
  );
}
