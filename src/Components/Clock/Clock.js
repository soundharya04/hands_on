import React from "react";

class Clock extends React.Component {
  state = {
    time: new Date().toLocaleString(),
  };

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({
        time: new Date().toLocaleString(),
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return <p className="App-clock">The time is {this.state.time}.</p>;
  }
}

export default Clock;
