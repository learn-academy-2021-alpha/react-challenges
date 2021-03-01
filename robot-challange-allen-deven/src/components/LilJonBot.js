  
import React, { Component } from 'react'


class LilJonBot extends Component {
  

  render() {
    return (
      <>
        <h1>Lil Jon Bot</h1>

        <p>{ this.props.robotInput } WHAT?! { this.props.robotInput } WHAT?! OKAAAAY!</p>
      </>
    )
  }
}
export default LilJonBot