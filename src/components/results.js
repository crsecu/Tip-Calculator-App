import React from 'react';
import "../styles/results.css";

export default function Results(props) {


    return (
        <div>
            <div>
                <span>Tip Amount</span>
                <span>/person </span>
                {props.perPersonTip === 0  ? <span> $0.00</span> : <span> {props.perPersonTip}</span>}
            </div>
            <div>
                <span>Total </span>
                <span>/person </span>
                {props.totalBillPerPerson === 0 ? <span> $0.00</span> : <span> {props.totalBillPerPerson}</span>}
            </div>    
        </div>
    )
}