import React, { Component } from 'react'
import Dice from './components/Dice'
import Rolls from './components/Rolls'
import './App.css';

class App extends Component {
  constructor () {
super()
this.state = {
  rolls: [],
  reset: 0
}
  }
  Randomizer () {
    this.state.rolls.push(math.cell(math.random *6 ))
  }
 
 
 render () {
    return (
    <div>
      

      <Dice />
      <Rolls/>
    </div>
  )};
}


export default App;
