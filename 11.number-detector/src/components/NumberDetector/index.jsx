import React, { useState } from "react";
import "./index.css";



export default function NumberDetector() {
  const [number, setNumber] = useState(0);

  const parityText = (n) => (n % 2 === 0 ? "This is Even" : "This is Odd");

  const random0to100 = () => Math.floor(Math.random() * 101);

  const handleRaise = () => {
    const rand = random0to100();
    setNumber((prev) => prev + rand);
  };

  return (
    <div className="detector-card" role="region" aria-label="Number Detector">
      <div className="number-display" aria-live="polite">
        {number}
      </div>

      <div className="parity">{parityText(number)}</div>

      <button className="raise-btn" onClick={handleRaise}>
        Raise
      </button>

      <div className="note">*Raise with a Random Number Between 0 to 100</div>
    </div>
  );
}
