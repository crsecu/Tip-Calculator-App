import React, { useState, useEffect } from "react";
import "./App.css";
import BillDetails from "./components/billDetails";
import Button from "./components/button";

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
        [name]: value,
      };
    });
  }

  useEffect(() => {
    if (customTip !== "") {
      handleTipSelection("custom");
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
          selectedTip: customTip,
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
    event.preventDefault(); // Prevent form submission
  };

  //function that resets the form when "Reset" button is clicked
  function handleReset() {
    setBill({
      billAmount: "",
      numberOfPeople: "",
    });
  }

  return (
    <>
      <form>
        <BillDetails
          changingState={totalBill}
          value={bill.billAmount}
          name="billAmount"
        />
        <Button
          tip={10}
          handleClick={(event) => handleTipSelection(10, event)}
          name="selectedTip"
          value={bill.selectedTip}
        />
        <Button
          tip={20}
          handleClick={(event) => handleTipSelection(20, event)}
          name="selectedTip"
          value={bill.selectedTip}
        />
        <Button
          tip={50}
          handleClick={(event) => handleTipSelection(50, event)}
          name="selectedTip"
          value={bill.selectedTip}
        />
        <BillDetails
          changingState={totalBill}
          value={bill.numberOfPeople}
          name="numberOfPeople"
        />
        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <input
          type="number"
          placeholder="Custom"
          value={customTip}
          onChange={(event) => {
            if (event.target.value !== "") {
              setCustomTip(event.target.value);
            }
          }}
          name="selectedTip"
        />
      </form>
    </>
  );
}

export default App;
