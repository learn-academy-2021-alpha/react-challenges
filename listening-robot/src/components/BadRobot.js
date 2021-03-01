import React, { Component } from "react";

const BLAH = "BLAH"
class BadRobot extends Component {
	wordManipulator = (word) => word.split("").map((c,i ) => BLAH[(i % BLAH.length)]).join("")
  
  render() {
    return (
    <div>
      <h2>Bad Robot</h2>
      <h3>I hear you saying, {this.wordManipulator(this.props.userInput)}. Is that correct?</h3>
    </div>
    )
	}
}

export default BadRobot;