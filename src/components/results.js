import React from 'react';

export default function Results(props) {


    return (
        <div>
            <h1>Results</h1>
            <div>
                <span>Tip Amount</span>
                <span>/person </span>
                <span> {props.perPersonTip}</span>
            </div>
            <div>
                <span>Total </span>
                <span>/person </span>
                <span> {props.totalBillPerPerson}</span>
            </div>
            
        </div>
    )
}