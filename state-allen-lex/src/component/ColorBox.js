import React, { Component } from 'react'

class ColorBox extends Component {

  handleClick() {
    console.log('The box was clicked');
    // Use a random number generator
    // Assign colors to the numbers
    // Return a random color
  }

  render() {
    return (
      <>
        <div className="rectangle" onClick={this.handleClick}> </div>
        
      </>
    )
  }
}
export default ColorBox;
