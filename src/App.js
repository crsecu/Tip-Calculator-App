import React, { useState, useEffect } from "react";
import "./App.css";
import BillDetails from "./components/billDetails";
import Button from "./components/button";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

function App() {
  const [bill, setBill] = useState({
    billAmount: "",
    numberOfPeople: "",
    selectedTip: "",
  });

  const [customTip, setCustomTip] = useState("");

  function totalBill(event) {
    const { name, value } = event.target;
    setBill((prevState) => {
      return {
        ...prevState,
        [name]: parseFloat(value),
      };
    });
  }

  useEffect(() => {
    if (customTip !== "") {
      handleTipSelection("custom");
      calculateTips();
    }
  }, [customTip]);

  console.log("bill amount", bill);

  function handleTipSelection(tip, event) {
    if (event) {
      event.preventDefault();
    }

    console.log("tip:", tip);
    console.log("customTip:", customTip);

    if (tip === "custom") {
      setBill((prevState) => {
        return {
          ...prevState,
          selectedTip: parseFloat(customTip),
        };
      });
    } else {
      setBill((prevState) => {
        return {
          ...prevState,
          selectedTip: tip,
        };
      });
    }
  }

  const calculateTips = (event) => {
    if (event) {
      event.preventDefault();
    }

    const totalBill = bill.billAmount;
    const numberOfPeople = bill.numberOfPeople;
    const selectedTip = bill.selectedTip;
    let tip = "";
    let tipPerPerson = "";

    if (
      totalBill !== undefined &&
      numberOfPeople > 0 &&
      selectedTip !== undefined
    ) {
      tip = (selectedTip / 100) * totalBill; //calculate total tip
      tipPerPerson = tip / numberOfPeople; //calculate tip per person
    }

    return {
      tip: tip,
      tipPerPerson: tipPerPerson,
    };
  };

  //function that resets the form when "Reset" button is clicked
  function handleReset() {
    setBill({
      billAmount: "",
      numberOfPeople: "",
      selectedTip: "",
    });

    setCustomTip("");
  }

  // function that prevents the default behavior of the "Enter" key in an input field

  function preventKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

  console.log("print tips", calculateTips());

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <BillDetails
          type="number"
          min={1}
          changingState={(event) => {
            totalBill(event);
            calculateTips(event);
          }}
          value={bill.billAmount}
          name="billAmount"
          handleKeyDown={(event) => {
            preventKeyPress(event);
          }}
        />
        <Button
          tip={10}
          handleClick={(event) => {
            handleTipSelection(10, event);
            calculateTips(event);
          }}
          name="selectedTip"
          value={bill.selectedTip}
        />
        <Button
          tip={20}
          handleClick={(event) => {
            handleTipSelection(20, event);
            calculateTips(event);
          }}
          name="selectedTip"
          value={bill.selectedTip}
        />
        <Button
          tip={50}
          handleClick={(event) => {
            handleTipSelection(50, event);
            calculateTips(event);
          }}
          name="selectedTip"
          value={bill.selectedTip}
        />
        <BillDetails
          type="number"
          min={1}
          changingState={(event) => {
            totalBill(event);
            calculateTips();
          }}
          value={bill.numberOfPeople}
          name="numberOfPeople"
          handleKeyDown={(event) => {
            preventKeyPress(event);
          }}
        />
        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <input
          type="number"
          placeholder="Custom"
          value={customTip}
          onChange={(event) => {
            setCustomTip(event.target.value);
            calculateTips(event);
          }}
          onKeyDown={(event) => {
            preventKeyPress(event);
          }}
          name="customTip"
        />
      </form>
    </>
  );
}

export default App;
