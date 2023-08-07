import React, { useState } from "react";
import "./App.css";
import BillDetails from "./components/billDetails";
import Button from "./components/button";

function App() {
  const [bill, setBill] = React.useState({
    billAmount: 0,
    numberOfPeople: 0,
    customTipVisible: false,
    customTipAmount: 0,
  });

  console.log(bill);

  function billAmount(event) {
    const { name, value } = event.target;

    setBill((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  //function that takes in tip percentage and calculates tip
  function handleClick(event) {
    event.preventDefault();
    console.log(event);
    const value = event.target.value;
    const tipPercentage = parseInt(value);
    const billAmount = parseInt(bill.billAmount);
    const error =
      "Invalid entry. <Bill> and <Number of People> must be greater than 0.";

    if(event.target.value > 0){
      if (bill.billAmount > 0 && bill.numberOfPeople > 0) {
        const tipAmount = (tipPercentage / 100) * billAmount;
        const tipPerPerson = tipAmount / bill.numberOfPeople;
        console.log(tipAmount);
      } else {
        console.log(error);
      }
    } else {
      console.log('Please select a tip percentage.')
    }
  }


   //function that takes in CUSTOM TIP PERCENTAGE and calculates tip 
   function calculateCustomTip(event) {
    console.log('calculating custom tip');
    const customTipValue = event.target.value;
    
    
   }

  //function that resets the form when "Reset" button is clicked
  function handleReset() {
    setBill({
      billAmount: 0,
      numberOfPeople: 0,
      customTipVisible: false,
      customTipAmount: 0,
    });
  }

  //function that handles click of the <<CUSTOM>> button
  function handleCustomTipClick() {
    setBill((prevState) => {
      return {
        ...prevState,
        customTipVisible: true,
      };
    });
  }

  return (
    <>
      <form>
        <BillDetails
          changingState={billAmount}
          value={bill.billAmount}
          name="billAmount"
        />
        <Button tip="0" handleClick={handleClick} />
        <Button tip="5" handleClick={handleClick} />
        <Button tip="10" handleClick={handleClick} />
        <Button tip="15" handleClick={handleClick} />
        <Button tip="20" handleClick={handleClick} />
        <Button tip="25" handleClick={handleClick} />
        <Button tip="50" handleClick={handleClick} />
        <BillDetails
          changingState={billAmount}
          value={bill.numberOfPeople}
          name="numberOfPeople"
        />

        <button type="button" onClick={handleCustomTipClick}>
          Custom
        </button>
        {bill.customTipVisible ? (
          <BillDetails
            changingState={billAmount}
            handleFocus={calculateCustomTip}
            value={bill.customTip}
            name="customTipAmount"
          />
        ) : null}

        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </>
  );
}

export default App;
