import React, { Component } from 'react'
import Menu from './components/Menu'
import Order from './components/Order'
import './App.css';

class App extends Component {
    constructor (props){
      super(props)
      this.state = {
        menuInfo: [
          {type: "Double-Double", price: 3.45, qty: 0},
          {type: "Cheeseburger", price: 2.40, qty: 0},
          {type: "Hamburger", price: 2.10, qty: 0},
          {type: "French Fries", price: 1.60, qty: 0}
        ],
        total: 0
      }
    }

addToOrder = (menuInfoIndex) => {
  // this.setState({ order: [...this.state.order, newItem]})
  this.setState(state => ({
    menuInfo: state.menuInfo.map( (obj, i) => {
      if (i === menuInfoIndex) {
        return {...obj, qty: state.menuInfo[i].qty + 1}
      } else {
        return obj
      }
    })
  }))
}    

render () {
  console.log(this.state.menuInfo)
  return (
    <>
      <Menu
        menuInfo = { this.state.menuInfo }
        addToOrder = { this.addToOrder }
      />

      <Order menuInfo = { this.state.menuInfo } />
    </>
  )
  
 }
}

export default App
