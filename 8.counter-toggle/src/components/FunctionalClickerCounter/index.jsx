import React, { useState } from "react";
import "./index.css";

function FunctionalClickerCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter-container">
      <h1 className="heading">Button Clicker Counter</h1>
      <p className="counter-text">
        You have clicked <span className="count">{count}</span> times
      </p>
      <p className="info-text">Click the button to increase the count!</p>
      <button className="click-button" onClick={handleClick}>
        Click Me!
      </button>
    </div>
  );
}

export default FunctionalClickerCounter;
