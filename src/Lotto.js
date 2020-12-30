import React, { Component } from "react";
import Ball from "./Ball";

class Lotto extends Component {
  static defaultProps = {
    name: "Lotto",
    maxNum: 40,
    numBalls: 6,
  };
  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.numBalls }),
    };
    this.handleClick = this.handleClick.bind(this);
  }
  generate() {
    this.setState((curState) => ({
      nums: curState.nums.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  }
  handleClick() {
    this.generate();
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <div>
          {this.state.nums.map((n) => (
            <Ball num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Genrate</button>
      </div>
    );
  }
}

export default Lotto;
