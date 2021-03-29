import React, { Component } from 'react';

class Dice extends Component{
//   constructor() {
//     super();
//     this.state = {
//       result: undefined
//     }
//   }

getDiceRollResult = () => {
//   console.log("box was clicked")
  const newResult = this.props.rollFunction();
  console.log(this.props.rollResult)
//   this.setState({result: this.props.rollResult})
}

  render(){
    return(
      <div>
        <h2>Dice</h2>
        <div className="rectangle" onClick={this.getDiceRollResult}>{this.props.rollResult}</div>
      </div>
    )
  }
}

export default Dice