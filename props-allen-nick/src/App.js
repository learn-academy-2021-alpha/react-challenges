import React, {Component} from 'react';
import './App.css';
import Dice from './components/Dice';
import Rolls from './components/Rolls';


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      result: undefined,
      log: []
    }
  }

  rollDice = () => {
    // let randomNum = Math.ceil(Math.random() * 6)
    // this.setState({ result: randomNum })
    // let currentLog = this.state.log
    // currentLog.push(randomNum)
    // this.setState({log: currentLog})
    let dice = Math.ceil(Math.random() * 6)
    this.setState({
      result: dice,
      log: [...this.state.log, dice]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Dice Roller</h1>
        <Dice 
        rollFunction={this.rollDice} 
        rollResult={this.state.result} 
        />
        <Rolls logOfResults={this.state.log} />
      </div>
    );
  }
}

export default App;
