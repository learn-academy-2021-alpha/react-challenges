import React, { Component } from 'react'
import GoodRobots from './components/GoodRobots'
import BadRobot from './components/BadRobot'
import RozBot from './components/RozBot'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      userSays: ""
    }
  }
    handleChange = (e) =>{
      console.log(e.target.value)
      this.setState ({userSays: e.target.value})
    }
    

    render() {
      return (
        <>
       <input
        type= "text"
        onChange ={this.handleChange}/>
        
        <GoodRobots/>
        
        <BadRobot/>
      
        <RozBot/>

       
        </>

        )
      }
    }

export default App;
