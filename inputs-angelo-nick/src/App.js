import React, { Component } from 'react'
import Goodrobot from './components/Goodrobot';
import Badrobot from './components/Badrobot';
import Jacksparrowrobot from './components/Jacksparrowrobot';
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
  this.setState({ userInput: e.target.value });
}

  render(){
    console.log(typeof this.state.userInput);
  return (
    <>
    <h1>Angelo & Nick's Robo Active Listening</h1>
    <div>
    <p className="paragraph">Say something...</p>
    <input
      type="text"
      value={this.state.userInput}
      onChange={this.handleChange}
      />
      <Goodrobot userInput={ this.state.userInput }/>
      <Badrobot userInput={ this.state.userInput }/>
      <Jacksparrowrobot userInput={ this.state.userInput }/>
      </div>
    </>
  );
  }
}
export default App;
