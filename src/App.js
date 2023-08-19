import React, { useState, useEffect } from "react";
import "./styles/App.css";
import BillDetails from "./components/billDetails";
import Button from "./components/button";
import Results from "./components/results";
import logo from "./images/logo.svg";
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
    let tip = 0;
    let tipPerPerson = 0;
    let billPerPerson = 0;
    let totalPerPerson = 0;

    if (totalBill === undefined) {
      console.error("Total bill is missing.");
    } else if (numberOfPeople === undefined || numberOfPeople <= 0) {
      console.error("Number of people must be a positive value.");
    } else if (selectedTip === undefined) {
      console.error("Selected tip percentage is missing.");
    } else {
      billPerPerson = totalBill / numberOfPeople; //calculate bill per person before tips
      tip = (selectedTip / 100) * totalBill; // calculate total tip
      tipPerPerson = tip / numberOfPeople; // calculate tip per person
      totalPerPerson = billPerPerson + tipPerPerson; //calculate total per person, including tips
    }

    return {
      tipPerPerson: isNaN(tipPerPerson) ? 0 : tipPerPerson, // Handle NaN case
      totalPerPerson: isNaN(totalPerPerson) ? 0 : totalPerPerson, // Handle NaN case
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
  // display results
  const totalTips = calculateTips();
  const displayTotalTips = totalTips.tip;

  // truncate numbers to 2 decimal places
  const displayTipPerPerson = Math.round(totalTips.tipPerPerson * 100) / 100;
  const displayTotalPerPerson =
    Math.round(totalTips.totalPerPerson * 100) / 100;

  return (
    <div className="tip-calculator-wrapper">
        <img src={logo} className = "tip-calculator__logo" alt="Spliter - Tip Calculator Logo" />
      <div className="tip-calculator">
        <form className="tip-calculator__form" onSubmit={(event) => event.preventDefault()}>
          <label className="tip-calculator__label" htmlFor="bill">
            Bill
          </label>
          <BillDetails
            inputIcon="tip-calculator__icon-dollar"
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
          <label
            className="tip-calculator__label selectTip"
            htmlFor="selectTip"
          >
            Select Tip %
          </label>
          <br></br>
          <div className="tip-calculator__button-container">
            <Button
              id="selectTip"
              tip={5}
              handleClick={(event) => {
                handleTipSelection(5, event);
                calculateTips(event);
                setCustomTip("");
              }}
              name="selectedTip"
              value={bill.selectedTip}
            />
            <Button
              id="selectTip"
              tip={10}
              handleClick={(event) => {
                handleTipSelection(10, event);
                calculateTips(event);
                setCustomTip("");
              }}
              name="selectedTip"
              value={bill.selectedTip}
            />
            <Button
              id="selectTip"
              tip={15}
              handleClick={(event) => {
                handleTipSelection(15, event);
                calculateTips(event);
                setCustomTip("");
              }}
              name="selectedTip"
              value={bill.selectedTip}
            />
            <Button
              id="selectTip"
              tip={25}
              handleClick={(event) => {
                handleTipSelection(25, event);
                calculateTips(event);
                setCustomTip("");
              }}
              name="selectedTip"
              value={bill.selectedTip}
            />
            <Button
              id="selectTip"
              tip={50}
              handleClick={(event) => {
                handleTipSelection(50, event);
                calculateTips(event);
                setCustomTip("");
              }}
              name="selectedTip"
              value={bill.selectedTip}
            />
            <input
              className="tip-calculator__button tip-calculator__customTip-button"
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
          </div>
          <br />
          <label className="tip-calculator__label" htmlFor="numberOfPeople">
            Number of People
          </label>
          <BillDetails
            inputIcon="tip-calculator__icon-person"
            type="number"
            id="numberOfPeople"
            placeholder={0}
            min={1}
            changingState={(event) => {
              totalBill(event);
              calculateTips(event);
            }}
            value={bill.numberOfPeople}
            name="numberOfPeople"
            handleKeyDown={(event) => {
              preventKeyPress(event);
            }}
            handleError={bill.numberOfPeople}
          />
        </form>
        <div className="tip-calculator__results">
          <Results
            totalBillPerPerson={displayTotalPerPerson}
            perPersonTip={displayTipPerPerson}
          />
          <button
            className="tip-calculator__button tip-calculator__reset-button"
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
