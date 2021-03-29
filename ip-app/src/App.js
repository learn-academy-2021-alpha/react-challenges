import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      ip: ""
    }
  }
// you can delete this pseudo code
  getIp = () => {
    fetch("https://ipapi.co/json/")
    .then(response => {
      return response.json()
    })
    .then(payload => {
      this.setState({ip: payload.ip})
    })
  }

  render () {
    return (
      <>
      <h1>My IP Address</h1>
      <button onClick = { this.getIp }>click here for IP</button>
      <p>{ this.state.ip }</p>
      </>
    )
  }
}

export default App;
