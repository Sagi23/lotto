import React, { Component } from "react";
import "./Ball.css";

class Ball extends Component {
  render() {
    return (
      <div className="Ball">
        {this.props.num}
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default Ball;
