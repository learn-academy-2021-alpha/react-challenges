import React, { Component } from 'react'
import Colors from './components/Colors'

class App extends Component {
  render() {

    return (
      <>
      <div>
        <h2>Colors</h2>
        <div class = "box">box</div>
        <Colors />
      </div>
      </>
    )
  }
}

export default App
