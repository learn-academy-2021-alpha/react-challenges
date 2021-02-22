import React, { Component } from 'react'

class Colors extends Component {
  constructor(props) {
    super(props)
    this.state = {
    colors: "green"
    }
  }

colorChange = () => {
  // const {colors} = this.state
  // let randomColor = (Math.floor(Math.random() * 6))
  this.setstate({colors: this.state.colors})
}

  render() {
    let {colors} = this.state
    return (
      <>
      
      <button onClick = {this.state.colors}>{this.state.colors}</button>
      </>
    )
  }
}

export default Colors
