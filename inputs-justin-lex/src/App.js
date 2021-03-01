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
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);


    this.setState({ userInput: e.target.value,
                    badInput: e.target.value,
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
          onChange={ this.handleChange }
        />
        <h3>Good Robot</h3>
        <p> I hear you saying { this.state.userInput }. Is that correct? </p>
        <h3>Bad Robot</h3>
        <p> { this.state.badInput } </p>
        <h3>Kanyebot</h3>
        <p> Imma let you finish, but Beyonce is { this.state.kanyeInput } </p>
      </>
    )
  }
}
export default App
