import React, { Component } from 'react'

class Badrobot extends Component {
    

//create a function that takes the users input and returns a string of random letters
changeInput = () => {
    console.log("hello")
   return this.props.userInput + "whatever"
}

  render(){
      //console.log(this.changeInput)
    return(
      <>
      <div>
      <h2>Bad Robot</h2>
      <p>I hear you saying { this.changeInput() }. Is that correct?</p>
      </div>
      </>
    )
  }
}

export default Badrobot