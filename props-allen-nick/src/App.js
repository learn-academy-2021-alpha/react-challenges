import React, {Component} from 'react';
import './App.css';
import Dice from './components/Dice';
import Rolls from './components/Rolls';


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      result: 0
    }
  }

  rollDice = () => {
    return Math.floor(Math.random() * 6)
  }

  render() {
    return (
      <div className="App">
        <h1>Dice Roller</h1>
        <Dice rollFunction={this.rollDice}/>
        <Rolls />
      </div>
    );
  }
}

export default App;
