import React, {useState} from 'react';
import './App.css';
import BillDetails  from './components/billDetails';
import Button from './components/button';

function App() {
  const [bill, setBill] = React.useState(
      {
        billAmount: "",
        numberOfPeople: ""
       }
  );

  console.log(bill);

  function billAmount(event) {
    const {name, value} = event.target;
    const error = "ERROR";
    setBill(prevState => {
      return {
        ...prevState,
        [name]: value > 0 ? value: error
      }
    })
      
    
  }

  //function that takes in tip percentage and calculates tip
  function handleClick(event) {
    event.preventDefault();
    const value =  event.target.value;
    const tipPercentage = parseInt(value);
    const billAmount = parseInt(bill.billAmount);
    const error = "Invalid entry. <Bill> and <Number of People> must be greater than 0.";

    if(bill.billAmount !== 'ERROR' && bill.numberOfPeople !== 'ERROR') {
      const tipAmount = (tipPercentage / 100) * billAmount;
      const tipPerPerson = tipAmount / bill.numberOfPeople;
      console.log(tipAmount);
    } else {
      console.log(error);
    }
   
  }

  //function that resets the form when "Reset" button is clicked
  function handleReset() {
    setBill(
      {
        billAmount: "",
        numberOfPeople: ""
      }
    )
  }

  return (
    <>
    <form>
      <BillDetails changingState ={billAmount} value = {bill.billAmount} name = "billAmount"/>
      <Button tip = "5" handleClick = {handleClick}/>
      <Button tip = "10" handleClick = {handleClick}/>
      <Button tip = "15" handleClick = {handleClick}/>
      <Button tip = "20" handleClick = {handleClick}/>
      <Button tip = "25" handleClick = {handleClick}/>
      <Button tip = "50" handleClick = {handleClick}/>
      <BillDetails changingState ={billAmount} value = {bill.numberOfPeople} name = "numberOfPeople" />
      <button type = "button" onClick={handleReset}>Reset</button>
    </form>
    </>
    
  )
  
}

export default App;
