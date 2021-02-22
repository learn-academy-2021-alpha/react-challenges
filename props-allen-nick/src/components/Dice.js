import React, { Component } from 'react';

class Dice extends Component{
  constructor() {
    super();
    this.state = {
      result: undefined
    }
  }

getDiceRollResult = () => {
  console.log("box was clicked")
  const newResult = this.props.rollFunction();
  console.log(newResult)
  this.setState({result: newResult})
}

  render(){
    return(
      <div>
        <h2>Dice</h2>
        <div onClick={this.getDiceRollResult} className="rectangle">{this.state.result}</div>
      </div>
    )
  }
}

export default Dice