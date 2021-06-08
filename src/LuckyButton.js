import React, { Component } from "react";

class LuckyButton extends Component {
  constructor(props) {
    super(props);
    this.randNum = this.randNum.bind(this);
    this.areYouLucky = this.areYouLucky.bind(this);
    this.state = {
      num: 1, // start page with number 1
      display: <button onClick={this.randNum}>Possibly a Lucky Number</button>, //starting display
    };
  }
  randNum() {
    this.setState({
      num: Math.floor(Math.random() * 10),
    });
    this.areYouLucky();
  }

  areYouLucky() {
    if (this.state.num === 7) {
      this.setState({
        display: "YOU ARE SOOOO LUCKY 🎰 🎉 🌟",
      });
    }
  }
  render() {
    return (
      <div>
        <div>Your number is {this.state.num}</div>
        <div>{this.state.display}</div>
      </div>
    );
  }
}

export default LuckyButton;
