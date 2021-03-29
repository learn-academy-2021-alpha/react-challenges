import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      ipa: ""
    }
  }

getIPA = () => {
  fetch('https://ipapi.co/json/')
  .then(banana => {
    return banana.json()
  })
  .then(payload => {
    this.setState({ ipa: payload })
  })
  .catch(error => {
    console.log(error);
  })
}

  render(){
    return(
      <>
      <h1>My IPA -- hold my beer.</h1>
      
      </>
    )
  }
}

export default App
