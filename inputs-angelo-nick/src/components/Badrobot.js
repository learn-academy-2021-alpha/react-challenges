import React, { Component } from 'react'

class Badrobot extends Component {


//create a function that takes the users input and returns a string of random letters
changeInput = () => {
    console.log("hello")
   return this.props.userInput + " whatever"
}

  render(){
      //console.log(this.changeInput)
    return(
      <>
      <div>
      <h2 className="badRobot">Bad Robot</h2>
      <p className="badRobot2">I hear you saying { this.changeInput() }. Is that correct?</p>
      </div>
      </>
    )
  }
}

export default Badrobot
