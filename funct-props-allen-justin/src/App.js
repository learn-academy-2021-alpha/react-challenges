import React, { Component } from 'react'
// import logo from './logo.svg';
import Menu from './components/Menu'
import Order from './components/Order'
import './App.css';




class App extends Component {
    constructor (props){
      super(props)
      this.state = {
        burgers: ["Double-Double $3.45", "Cheeseburger $2.40", "Hamburger $2.10", "French Fries $1.60"],
        prices: ["3.45", "2.40", "2.10", "1.60"],
        order: []
      }
    }

addToOrder = (newItem) => {
  console.log(newItem)
  this.setState({ order: [...this.state.order, newItem]})
}    

render () {
  return (
    <>
      <h1>Menu</h1>
      <Menu burgers = { this.state.burgers } addToOrder = {this.addToOrder} />

      <h1>Order</h1>
      <Order order = { this.state.order } />
    </>
  )
  
 }
}

export default App
