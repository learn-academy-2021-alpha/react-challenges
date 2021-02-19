import React, { Component } from 'react'

class Colors extends Component {
  constructor(props) {
    super(props)
    this.state = {
    colors: ["green", "blue", "yellow", "red", "purple", "orange"]
    }
  }

colorChange = () => {
  const {colors} = this.state
  let randomColor = (Math.floor(Math.random() * 6))
    return colors[randomColor]
  this.setstate({colors: this.state.colors})
}

  render() {
    return (
      <>
      <button onClick = {this.state.colors}>{this.state.colors}</button>
      </>
    )
  }
}

export default Colors
