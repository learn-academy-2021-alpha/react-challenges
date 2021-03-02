import React, { Component } from 'react'
import './App.css';
// import './components/GoodRobot';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userInput: "",
      gibberish: ""
    
    }
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.badRobot()
    this.setState({ userInput: e.target.value })

  }

  badRobot = () => {  
    let splitInput = this.state.userInput.split("")
    // h e l l o 
    // b l a b l
    let newWord = splitInput.map((value, index) => {
      if(index % 3 === 0 ){
        return "b"
      } else if(index % 3 === 1){
        return "l"
      } else if(index % 3 === 2){
        return "a"
      }
      

    })
    console.log(splitInput)


    this.setState({ gibberish: newWord.join("") })

  }



  render(){
    return(
      <>
      <h1>Robo Active Listening</h1>
      <h3>Say Something</h3>
      <input className="textbox"
        type="text"
        value={ this.state.userInput }
        onChange={ this.handleChange } 
        />
      <div>
      <h3 id="good"> Good Robot </h3>
      <p>Did I hear { this.state.userInput }</p>
      </div>
      


        <h3 id="bad"> Bad Robot </h3>
  
        <p> { this.state.gibberish }</p>
      

         <h3 id="exotic"> Exotic Joe </h3>
         <p>Caroll Basking says { this.state.userInput }, but I think she DID IT</p>
        

        


      </>

    )
  }
}

export default App