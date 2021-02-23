import React, { Component } from 'react'
import Dice from './components/Dice.js'
import Rolls from './components/Rolls.js'


class App extends Component {


  render(){
    return (
      <div className="App">
        <p>
          Play our dice game!
        </p>
        <Dice />
        <RollLog log={}/>

      </div>
    );

  }




}



export default App;
