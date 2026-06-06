import React, { useState } from "react";

function App() {

  // Stores the numbers and operators
  const [input, setInput] = useState("");

  // Add clicked value to display
  const handleClick = (value: string) => {
    setInput(input + value);
  };

  // Clear calculator
  const clearInput = () => {
    setInput("");
  };

  // Calculate answer
  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="container">

      <div className="calculator">

        <h1>Calculator</h1>

        {/* Bigger display */}
        <div className="display">
          {input || "0"}
        </div>

        <div className="buttons">

          <button onClick={clearInput}>C</button>
          <button onClick={() => handleClick("/")}>÷</button>
          <button onClick={() => handleClick("*")}>×</button>
          <button onClick={() => handleClick("-")}>−</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("+")}>+</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={calculate}>=</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("0")}>0</button>

          <button onClick={() => handleClick(".")}>.</button>

        </div>
      </div>
    </div>
  );
}

export default App;
