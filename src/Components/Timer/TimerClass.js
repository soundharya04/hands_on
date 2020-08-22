import React, { Component } from "react";

export default class TimerClass extends Component {
  state = {
    mins: "00",
    secs: "00",
    isClicked: false,
  };

  startCountDown = () => {};
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.mins}
          onChange={(e) => {
            this.setState({
              mins: e.target.value,
            });
          }}
        />
        <input
          type="text"
          value={this.state.secs}
          onChange={(e) => {
            this.setState({
              secs: e.target.value,
            });
          }}
        />
        <Timer time={this.state} />
        <button onClick={this.startCountDown}>Start</button>
      </div>
    );
  }
}

class Timer extends Component {
  render() {
    return (
      <span>
        {this.props.time.mins}:{this.props.time.secs}
      </span>
    );
  }
}
