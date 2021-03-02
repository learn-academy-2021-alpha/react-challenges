  
import React, { Component } from 'react'


class GoodRobot extends Component {
  

  render() {
    return (
      <>
        <h1>😇 Good Robot 😇</h1>

        <p>I hear you saying, { this.props.robotInput } is that correct?</p>
      </>
    )
  }
}
export default GoodRobot