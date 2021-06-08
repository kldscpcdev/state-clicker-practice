import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1, // start page with number 1
    };
    this.randNum = this.randNum.bind(this);
  }
  randNum() {
    this.setState({
      num: Math.floor(Math.random() * 10),
    });
  }
  render() {
    return (
      <div>
        <div>Your number is {this.state.num}</div>
        <button onClick={this.randNum}>Possibly a Lucky Number</button>
      </div>
    );
  }
}

export default Counter;
