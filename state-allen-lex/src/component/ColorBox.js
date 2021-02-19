import React, { Component } from 'react'

class ColorBox extends Component {

constructor(props){
  super(props)
  this.state = {
    color: ""
  }
}


  handleClick = () =>{
    console.log('The box was clicked');
    // Use a random number generator
    // Assign colors to the numbers
    // Return a random color
    this.setState({color:"color"})
  }

  render() {
    return (
      <>
        <div className="rectangle" onClick={this.handleClick}> {this.state.color} </div>
      </>
    )
  }
}
export default ColorBox;
