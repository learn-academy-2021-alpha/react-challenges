import React, { Component } from 'react'
import Dice from './components/Dice'
import Rolls from './components/Rolls'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
this.state = {
  rolls: [
    "0",
  ],
  // rolls: [],
  // numberOfDice: undefined,
  // rollSum: null,
}
  }
  randomizer () {
    return Math.floor(Math.random()*6);
    // this.setState({
    //   numberOfDice,
    //   rolls,
    //   rollSum
    // }
  };

  saveNumber () {
    return this.randomizer(this.state.rolls)
  }
// we want a function that returns the previous results and saves the results of our random number generator

 
 render () {
    return (
    <div>
      { this.state.rolls.map((number, index) => {
      return <Dice 
            dicenumber = { number } 
            key={index}
            randomNumber= {this.randomizer} 
        /> }
       )} 
      
      <Rolls/>
          <p>{this.saveNumber}</p>
    </div>
  )};
}


export default App;
