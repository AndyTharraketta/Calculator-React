import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        const result = eval(input);
        setInput(result.toString());
      } catch (error) {
        setInput("Fehler");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="calculator-container">
      <h1>Calculator-React</h1>
      <div className="message-container">
        <p>{input || "0"}</p>
      </div>
      <div className="btn-container">
        {buttons.map((btn, index) => (
          <button key={index} className="btn" onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
