import React from "react";
import "../styles/results.css";

export default function Results(props) {
  return (
    <div className="tip-calc__tip-summary-container">
      <div className="tip-calc__tip-summary">
        <div className="tip-calc__tip-info">
          <span className="tip-calc__tip-label">Tip Amount</span>
          <span>/ person </span>
        </div>
        {props.perPersonTip === 0 ? (
          <span className="tip-calc__amount-due"> $0.00</span>
        ) : (
          <span className="tip-calc__amount-due"> ${props.perPersonTip}</span>
        )}
      </div>
      <div className="tip-calc__tip-summary">
        <div className="tip-calc__tip-info">
          <span className="tip-calc__tip-label">Total </span>
          <span>/ person </span>
        </div>
        {props.totalBillPerPerson === 0 ? (
          <span className="tip-calc__amount-due"> $0.00</span>
        ) : (
          <span className="tip-calc__amount-due">
            {" "}
            ${props.totalBillPerPerson}
          </span>
        )}
      </div>
    </div>
  );
}
