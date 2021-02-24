import React, { Component } from 'react'
import TextInput from './components/TextInput'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      textType: ["noun", "pronoun", "verbs", "adjectives", "noun", "pronoun", "adverb"],
      inputText: []

    }
  }

  addTextToInput = (addedText) => {
    this.setState({ inputText: [...this.state.inputText, addedText] })
  } 

  render() {
    return(
      <>
      <h1>Mad Libs</h1>
      <h3>Text Type</h3>
        <ul>
        { this.state.textType.map((item, index) => {
          return(
            <li key={ index }>
              { item }
              <form>
                <label>
                  <input type="text" item="input here" />
                </label>
              </form>
            </li>
          )
        })}
        </ul>
      </>
    )
  }
}

export default App;
