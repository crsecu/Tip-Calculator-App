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

    if (totalBill === undefined) {
      console.error("Total bill is missing.");
    } else if (numberOfPeople === undefined || numberOfPeople <= 0) {
      console.error("Number of people must be a positive value.");
    } else if (selectedTip === undefined) {
      console.error("Selected tip percentage is missing.");
    } else {
      tip = (selectedTip / 100) * totalBill; // calculate total tip
      tipPerPerson = tip / numberOfPeople; // calculate tip per person
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
        <label htmlFor="bill">Bill</label>
        <BillDetails
          type="number"
          id="bill"
          placeholder={0}
          min={1}
          changingState={(event) => {
            if (parseFloat(event.target.value) !== 0) {
              totalBill(event);
              calculateTips(event);
            } else {
              console.log("Value has to be greater than 0.");
            }
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
        <input
          type="number"
          min={1}
          placeholder="Custom"
          value={customTip}
          onChange={(event) => {
            if (parseFloat(event.target.value) !== 0) {
              setCustomTip(event.target.value);
              calculateTips(event);
            } else {
              console.log("Value has to be greater than 0.");
            }
          }}
          onKeyDown={(event) => {
            preventKeyPress(event);
          }}
          name="customTip"
        />
        <br />
        <label htmlFor="numberOfPeople">Number of People</label>
        <BillDetails
          type="number"
          id="numberOfPeople"
          placeholder={0}
          min={1}
          changingState={(event) => {
            if (parseFloat(event.target.value) !== 0) {
              totalBill(event);
              calculateTips(event);
            } else {
              console.log("Value has to be greater than 0.");
            }
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
      </form>
    </>
  );
}

export default App;
