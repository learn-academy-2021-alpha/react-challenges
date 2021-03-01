  
import React, { Component } from 'react'
import './App.css'
import GoodRobot from './components/GoodRobot'

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
          
      </>
    )
  }
}
export default App
