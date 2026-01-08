import React, { Component } from "react";
import "./index.css";

class Speedometer extends Component {
  state = {
    speed: 0,
  };

  handleAccelerate = () => {
    this.setState((prevState) => ({
      speed: prevState.speed < 280 ? prevState.speed + 10 : 280,
    }));
  };

  handleBrake = () => {
    this.setState((prevState) => ({
      speed: prevState.speed > 0 ? prevState.speed - 10 : 0,
    }));
  };

  render() {
    const { speed } = this.state;

    return (
      <div className="speedometer-container">
        <h1 className="heading">SPEED TEST</h1>

        <img
          className="speedometer-image"
          src="https://res.cloudinary.com/saiuttej/image/upload/v1686125938/Insta%20Share%20Project%20Assets/istockphoto-1362561509-612x612-removebg-preview_gp4cvq.png"
          alt="speedometer"
        />

        <h2 className="speed-text">Speed is {speed} Kmph</h2>
        <p className="limit-text">
          Min Limit is 0 Kmph, Max Limit is 280 Kmph
        </p>

        <div className="buttons-container">
          <button
            type="button"
            className="accelerate-btn"
            onClick={this.handleAccelerate}
          >
            Accelerate
          </button>

          <button
            type="button"
            className="brake-btn"
            onClick={this.handleBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    );
  }
}

export default Speedometer;
