import React, { Component } from 'react'

class ColorButtonSwitcher extends Component {
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
        <button
          onClick={this.pickColor}
          style={{height: '100px', width: '100px', backgroundColor: this.state.colors[this.state.colorIndex]}}
        >{this.state.colors[this.state.colorIndex]}</button>
      </>
    )
  }


}
export default ColorButtonSwitcher
