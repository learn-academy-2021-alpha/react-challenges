import React, { Component } from 'react'

class Jacksparrowrobot extends Component {


//create a function that takes the users input and returns a string of random letters
changeInput = () => {
    console.log("hello")
   return this.props.userInput + " arrrr matey"
}

  render(){
      //console.log(this.changeInput)
    return(
      <>
      <div>
      <h2 className="jackSparrow">Jack Sparrow Robot</h2>
      <p className="jackSparrow2">I hear you saying { this.changeInput() }. Is that correct?</p>
      </div>
      </>
    )
  }
}

export default Jacksparrowrobot
