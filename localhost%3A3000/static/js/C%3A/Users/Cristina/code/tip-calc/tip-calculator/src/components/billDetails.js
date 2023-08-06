import React, {useState} from 'react';
import Button from './button';

export default function BillDetails() {

const [bill, setBill] = React.useState('');


function billAmount(event) {
    setBill(event.target.value);

}

//function that takes in tip percentage and calculates tip
    function handleClick(event) {
       
        const tipPercentage = event.target.value;
        const billAmount = bill;
        debugger;
        const tipAmount = (tipPercentage / billAmount) * 100;
        console.log(tipAmount);
    }

     return (
      <div>
        <form>
          <input type="number" name="amount" onChange={billAmount}></input>
        </form>

        <Button tip = "10" handleClick = {handleClick}/>
        <Button tip = "20" handleClick = {handleClick}/>
      </div>
    );
}