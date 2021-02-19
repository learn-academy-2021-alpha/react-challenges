import React, { Component } from 'react'

class ColorBox extends Component {

constructor(props){
  super(props)
  this.state = {
    color: "black"
  }
}


  handleClick = () =>{
    // Create a variable to store the color
    let prevColor = this.state.color;
    let newColor;
    if (prevColor === "black" || prevColor === "orange") {
      newColor = "green"
    } else if (prevColor === "green") {
      newColor = "blue"
    } else if (prevColor === "blue") {
      newColor = "yellow"
    } else if (prevColor === "yellow") {
      newColor = "red"
    } else if (prevColor === "red") {
      newColor = "purple"
    } else if (prevColor === "purple") {
      newColor = "orange"
    }
    // Assign colors to the numbers
    // Return a random color
    this.setState({color: newColor})
  }

  render() {
    return (
      <>
        <div className="rectangle" onClick={this.handleClick}
        style={{backgroundColor: this.state.color}}> {this.state.color} </div>
      </>
    )
  }
}
export default ColorBox;
