import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userInput: "",
      badInput: "",
      kanyeInput: "",
    }
  }


  handleChange = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
    
    let bad = e.target.value;
    bad = bad.replace(/./g,"bla") 
    console.log(bad)
    this.setState({ userInput: e.target.value,
                    badInput:bad,
                    kanyeInput: e.target.value })
  }

  // badRobot = (e) => {
  //
  //   this.setState({ badInput: e.target.value })
  // }
  //
  // kanyeBot = (e) => {
  //   this.setState({ kanyeInput: e.target.value })
  // }

  render() {
    console.log(this.state.userInput);
    return (
      <>
        <h1>Listening Robot</h1>
        <input
          type="text"
          value={this.state.userInput}
          onChange={ this.handleChange }
        />
        <h3>Good Robot</h3>
        <p> I hear you saying { this.state.userInput }. Is that correct? </p>
        <h3>Bad Robot</h3>
        <p> I hear you saying { this.state.badInput}. Is that correct? </p>
        <h3>Learn bot</h3>
        <p> Imma let you finish, but Learn Academy is { this.state.userInput } </p>
      </>
    )
  }
}
export default App
