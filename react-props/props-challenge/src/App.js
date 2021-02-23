import React, { Component } from 'react'
import Dice from './components/Dice.js'
import RollLog from './components/Rolls.js'


class App extends Component {

  diceRoll = () => {

    return Math.floor(Math.random() * 6 );

  }
  // set up a function that will roll the dice

  rollsLog = () => {
    const logArr = [];
    logArr.push(this.state.number)

    return logArr;
  }
  // very not sure about this function, i don't know how to display every number that has been rolled

  render(){
    return (
      <div className="App">
        <p>
          Play our dice game!
        </p>
        <Dice rolledDice={this.diceRoll}/>
        <RollLog theLog={this.rollsLog}/>

      </div>
    );
    // rolledDice and theLog are property keys that point to the functions diceRoll and rollsLog

  }



}



export default App;
