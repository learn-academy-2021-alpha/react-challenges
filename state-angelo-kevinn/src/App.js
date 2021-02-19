// As a user, I can see a white square on the screen 
// As a user, when I click on the square the name of a color appears in the box
// As a user, each time I click the box I see a new color name
// As a user, I can cycle through a list of color names, one per click - green, blue, yellow, red, purple, orange
// As a user, when I click the box, the background changes to match the name of the color name displayed in the box
// As a user, I can see many color boxes on the page all acting independently of one another
// Stretch
// As a user, I can see a button to add or remove color boxes
// As a user, when I click the add button, I can add one colorbox that acts independently of the other colorboxes
// As a user, when I click the remove button, I can remove one colorbox

import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: ['white','green', 'blue', 'yellow', 'red', 'purple', 'orange'],
      colorIndex:0
    }
  }

  pickColor = () => {
    //here we need to incriment the the index to reference each color in the array
    // this.setState( {colors: this.state.colors[this.state.colorIndex] } )

    // once colorIndex is past colors array.length loop back to 0
    if(this.state.colorIndex > this.state.colors.length - 1) {
      this.setState({colorIndex: this.state.colorIndex = 0})
    } else {
      this.setState( {colorIndex: this.state.colorIndex + 1} )
    }
    console.log(this.state.colors[this.state.colorIndex])
  }

  render() {
    return (
      <>
        <h1>Angelo and Kevinn's Colorbox</h1>
        <button
          onClick={this.pickColor}
          style={{height: '100px', width: '100px', backgroundColor: this.state.colors[this.state.colorIndex]}}
        >{this.state.colors[this.state.colorIndex]}</button>
      </>
    )
  }


}
export default App
