import React, { Component } from "react";

const BLAH = "BANANA"
class SarahBot extends Component {
	wordManipulator = (word) => word.split("").map((c,i ) => BLAH[(i % BLAH.length)]).join("")
  
  render() {
    return (
    <div>
      <h2>Sarahbot</h2>
      <h3>I hear you saying that you love {this.wordManipulator(this.props.userInput)}. Is that correct?</h3>
    </div>
    )
	}
}

export default SarahBot;