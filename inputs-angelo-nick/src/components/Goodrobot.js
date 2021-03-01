import React, { Component } from 'react'

class Goodrobot extends Component {


  render(){
    return(
      <>
      <div>
      <h2>Good Robot</h2>
      <p>I hear you saying { this.props.userInput }. Is that correct?</p>
      </div>
      </>
    )
  }
}

export default Goodrobot
