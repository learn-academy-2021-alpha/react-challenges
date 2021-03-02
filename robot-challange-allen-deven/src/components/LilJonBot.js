  
import React, { Component } from 'react'


class LilJonBot extends Component {
  

  render() {
    return (
      <>
      <div className = "robot">
        <h1>🥤🍾 Lil Jon Bot🥤🍾</h1>

        <p>{ this.props.robotInput } WHAT?! { this.props.robotInput } WHAT?! OKAAAAY!</p>

        </div>
      </>
    )
  }
}
export default LilJonBot