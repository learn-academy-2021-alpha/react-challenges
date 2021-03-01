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
    // console.log(e.target.value)

    // let bad = e.target.value;
    // bad = bad.replace(/./g,"bla") 
    // console.log(bad)
    this.setState({ userInput: e.target.value,
                  })
  }

  badRobot = (typed) => {
    let badArray = typed.split('').map((value, index) => {
      if (index % 3 === 0) {
        return 'B'
      } else if (index % 3 === 1) {
        return 'L'
      } else {
        return 'A'
      }
    })
    return badArray.join('')
  }


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
        <p> I hear you saying { this.badRobot(this.state.userInput)}. Is that correct? </p>
        <h3>Learn bot</h3>
        <p> Imma let you finish, but Learn Academy is { this.state.userInput } </p>
      </>
    )
  }
}
export default App
