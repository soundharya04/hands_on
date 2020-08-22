import React, { Component } from "react";

export default class TimerClass extends Component {
  state = {
    seconds: "00",
    value: "",
    isClicked: false,
  };

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - min * 60;

    this.setState({
      value: min,
      seconds: sec,
    });

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      });
    }

    if (min < 10) {
      this.setState({
        value: "0" + min,
      });
    }

    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle);
    }

    this.secondsRemaining--;
  }

  startCountDown = () => {
    this.intervalHandle = setInterval(() => this.tick(), 1000);

    this.secondsRemaining = this.state.value * 60;
    this.setState({
      isClicked: true,
    });
  };
  render() {
    return (
      <div>
        {this.state.isClicked ? (
          <Timer value={this.state.value} seconds={this.state.seconds} />
        ) : (
          <div>
            <label>Enter minutes</label>
            <input
              type="text"
              value={this.state.value}
              disabled={this.state.isClicked}
              onChange={(e) => {
                this.setState({
                  value: e.target.value,
                });
              }}
            />
            <button onClick={this.startCountDown}>Start</button>
          </div>
        )}
      </div>
    );
  }
}

class Timer extends Component {
  render() {
    return (
      <span>
        {this.props.value}:{this.props.seconds}
      </span>
    );
  }
}
