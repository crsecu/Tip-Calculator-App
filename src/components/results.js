import React from 'react';
import "../styles/results.css";

export default function Results(props) {


    return (
        <div className="tip-calculator__tip-summary-container">
            <div className="tip-calculator__tip-summary">
                <div className="tip-calculator__tip-info">
                    <span className="tip-calculator__tip-label" >Tip Amount</span>
                    <span>/person </span>
                </div>
                {props.perPersonTip === 0  ? <span className = "tip-calculator__amount-due"> $0.00</span> : <span className = "tip-calculator__amount-due"> ${props.perPersonTip}</span>}
            </div>
            <div className="tip-calculator__tip-summary">
                <div className="tip-calculator__tip-info">
                    <span className="tip-calculator__tip-label">Total </span>
                    <span>/person </span>
                </div>
                {props.totalBillPerPerson === 0 ? <span className = "tip-calculator__amount-due"> $0.00</span> : <span className = "tip-calculator__amount-due"> ${props.totalBillPerPerson}</span>}
            </div>    
        </div>
    )
}