  
import React, { Component } from 'react'
import './App.css'
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import LilJonBot from './components/LilJonBot'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      robotInput: ""
    }
  }

  handleChange = (e) => {
    // console.log(e)
    // console.log(e.target)
    console.log(e.target.value)
    this.setState({ robotInput: e.target.value })
  }

  render() {
    console.log(typeof this.state.robotInput)
    return (
      <>
        <h1>Robot App</h1>
        <input
          type="text"
          onChange={ this.handleChange }
          value={ this.state.robotInput }
        />
        <GoodRobot 
          robotInput={ this.state.robotInput}/>
        <BadRobot
          robotInput={ this.state.robotInput}/>
        <LilJonBot
          robotInput={ this.state.robotInput}/>
      </>
    )
  }
}
export default App
