import React,  { Component } from 'react';

class RollTheDice extends Component {
  constructor(){
    super();
    this.state = {
      diceNumber: undefined
    }
}

  getDiceNumber = () => {
    const newDiceNumber = this.rollingDice
  }
//   render()
//     return(
//       <div>
//         <h1> roll the dice! </h1>
//       </div>
//     )
//   }
// }


render(){
  return(
  <RollTheDice
    number = {
      this.state.diceRoll[this.state.currentRoll]
    }

}

export default RollTheDice
