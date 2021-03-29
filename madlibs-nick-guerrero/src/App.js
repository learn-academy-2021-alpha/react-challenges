import React, { Component } from 'react'
import TextInput from './components/TextInput'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      textType: ["a name", "food type", "noun", "noun", "adjective", "verb", "verb", "same food type as before"],
      addedToMadlibs: []

    }
  }

  addTextToInput = (addedText) => {
    this.setState({ addedToMadlibs: [...this.state.addedToMadlibs, addedText] })
  } 

  render() {
    return(
      <>
      <h1>Mad Libs</h1>
      <h3>Text Type</h3>
        <TextInput type={this.state.textType}/>
        <button onClick= { () => 
        this.state.addTextToInput() }>Submit</button>
        <button >Clear</button>
        <p>
        Once upon a time, there was a silly old baboon named {}. He decided he wanted a nice big {} to eat. So he got in his {} and drove it to the nearest {} store. But he had no money to pay the {} store owner. So he said he would help out around the store by {}. He did such a good job at {} that he got another {} free.
        </p>
      </>
    )
  }
}

export default App;
