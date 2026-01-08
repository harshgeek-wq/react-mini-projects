import React, { useState } from "react";
import "./index.css";

export default function GenerateRandomNumber() {
  const [number, setNumber] = useState(0);

  const generate = () => {
    const randomValue = Math.floor(Math.random() * 101); 
    setNumber(randomValue);
  };

  return (
    <div className="card">
      <h2 className="title">Random Number</h2>
      <p className="subtitle">Generate a random number in the range of 0 to 100</p>

      <button className="btn" onClick={generate}>
        Generate
      </button>

      <h1 className="random-output">{number}</h1>
    </div>
  );
}


