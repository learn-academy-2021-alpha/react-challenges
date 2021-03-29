import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      nasa: null,
      pic: null
    }
  }

getIPA = () => {
  fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(banana => {
    return banana.json()
  })
  .then(payload => {
    this.setState({ nasa: payload })
  })
  .catch(error => {
    console.log(error);
  })
}
getPic = () => {
  let randomNum = Math.floor((Math.random) * this.state.nasa.length)
  this.setState({ pic : this.state.nasa[randomNum].img_src})


} 
  render(){
    return(
      <>
      <h1>My IPA -- hold my beer.</h1>
      <button onClick={ this.pic }> Choose Beer </button>
      <p>{ this.state.nasa.id}</p>
      </>
    )
  }
}

export default App
