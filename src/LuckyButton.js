import React, { Component } from "react";

class LuckyButton extends Component {
  constructor(props) {
    super(props);
    this.randNum = this.randNum.bind(this);
    this.state = {
      num: 1, // start page with number 1
    };
  }
  randNum() {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    this.setState({
      num: randomNum,
    });
  }
  render() {
    return (
      <div>
        <div>Your number is {this.state.num}</div>
        {this.state.num === 7 ? (
          <div>YOU ARE SOOOO LUCKY 🎰 🎉 🌟 </div>
        ) : (
          <button onClick={this.randNum}>Possibly a Lucky Number</button>
        )}
      </div>
    );
  }
}

export default LuckyButton;
