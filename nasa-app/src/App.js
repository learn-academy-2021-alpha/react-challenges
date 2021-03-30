import React, { Component } from 'react'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      photos: "",
      nasa: ""
    }
  }

  
getPic = () => {
  let randomNum = Math.floor(Math.random() + this.state.photos.length)
  this.setState({ nasa: this.state.nasa[randomNum].img_src})
})
  .catch(error => {
    console.log(error)
  })
}

  render() {
    return (
      <>
      <h1>Mars Rover Pictures</h1>
      </>
    )
  }
}

export default App;
