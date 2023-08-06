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
    setBill(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
      
    
  }

  //function that takes in tip percentage and calculates tip
  function handleClick(event) {
    const value =  event.target.value;
    const tipPercentage = parseInt(value);
    const billAmount = parseInt(bill.billAmount);
    const tipAmount = (tipPercentage / 100) * billAmount;
    console.log(tipAmount);
  }

  return (
    <>
      <BillDetails state ={billAmount} name = "billAmount"/>
      <Button tip = "5" handleClick = {handleClick}/>
      <Button tip = "10" handleClick = {handleClick}/>
      <Button tip = "15" handleClick = {handleClick}/>
      <Button tip = "20" handleClick = {handleClick}/>
      <Button tip = "25" handleClick = {handleClick}/>
      <Button tip = "50" handleClick = {handleClick}/>
       
      <BillDetails state ={billAmount} name = "numberOfPeople" />
    </>
    
  )
  
}

export default App;
