import React, { Component } from 'react'
import Rolls from './Rolls'


class Dice extends Component {
  constructor() {
    super()
    this.state = {
      randomDiceNum: undefined
    }
  }

  getRandomDice = () => {
    const newDice = this.props.diceAction()
    this.setState({randomDiceNum: newDice});
  }

  render() {
    return (
      <>
        <h1>Dice</h1>
        <button onClick={this.getRandomDice}>
        Roll dice
        </button>
        <p>{this.state.randomDiceNum}</p>
        <Rolls logRolls={this.state.randomDiceNum} />
      </>
    )
  }
}



export default Dice;
