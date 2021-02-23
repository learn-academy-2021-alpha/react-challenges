import React,  { Component } from 'react';

class RollTheDice extends Component {
  constructor(){
    super();
    this.state = {
      diceNumber: undefined
    }
}

  getDiceNumber = () => {
    const newDiceNumber = this.props.diceAction();
    this.setState({currentRoll: newDiceNumber});
  }

render(){
  return(
    <div>
      <p> your roll is {this.state.diceNumber()}!</p>
      <button onClick = {this.getDiceNumber}/>
      Roll the dice!
    </div>
    );
  }
}
export default RollTheDice
