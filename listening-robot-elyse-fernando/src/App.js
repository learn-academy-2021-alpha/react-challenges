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
        value={ this.state.userSays }
        onChange ={this.handleChange}/>

        <GoodRobots
                  userSays= { this.state.userSays }/>

        <BadRobot userSays= { this.state.userSays }/>

        <RozBot userSays= { this.state.userSays }/>


        </>

        )
      }
    }

export default App;
