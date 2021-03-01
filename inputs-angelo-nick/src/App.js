import React, { Component } from 'react'
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userInput: ""

    }
  }
handleChange = (e) => {
  console.log(e.target.value)
  this.setSate({ userInput: e.target.value });
}

  render(){
    console.log(typeof this.state.userInput);
  return (
    <>
    <h1>Angelo & Nick's Robo Active Listening</h1>
    <div>
    <p>say something</p>
    <input
      type="text"
      value={this.state.userInput}
      onChange={this.handleChange}
      />
      <Goodrobot handleInput=""
      </div>
      <p>{ this.state.userInput }</p>
    </>
  );
  }
}
export default App;
