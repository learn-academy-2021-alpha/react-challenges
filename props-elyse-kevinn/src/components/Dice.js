import React, { Component } from 'react'



class Dice extends Component {


  // getArray = () => {
  //   const number = this.state.numberArray.push(this.randomDiceNum)
  //   this.setState({numberArray: number})
  // }

  render() {
    return (
      <>
        <h1>Dice</h1>
        <button onClick={this.props.getRandomDice}>
        Roll dice
        </button>
        <p>{this.props.diceAction}</p>
      </>
    )
  }
}



export default Dice;
