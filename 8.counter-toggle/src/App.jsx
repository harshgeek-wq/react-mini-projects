import React from "react";
import ClassClickerCounter from "./components/ClassClickerCounter";
import FunctionalClickerCounter from "./components/FunctionalClickerCounter";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* <ClassClickerCounter /> */}
      <FunctionalClickerCounter/>
    </div>
  );
}

export default App;
