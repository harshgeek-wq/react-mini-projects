import React, { Component } from "react";
import "./index.css";

class ClassClickerCounter extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className="counter-container">
        <h1 className="heading">Button Clicker Counter</h1>
        <p className="counter-text">
          You have clicked <span className="count">{count}</span> times
        </p>
        <p className="info-text">Click the button to increase the count!</p>
        <button className="click-button" onClick={this.handleClick}>
          Click Me!
        </button>
      </div>
    );
  }
}

export default ClassClickerCounter;
