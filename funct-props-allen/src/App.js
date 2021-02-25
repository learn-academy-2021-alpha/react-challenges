import React, { Component } from 'react'
import Menu from './components/Menu'
import Order from './components/Order'
import './App.css';

class App extends Component {
    constructor (props){
      super(props)
      this.state = {
        menuWithPrices: [
          {type: "Double-Double", price: 3.45},
          {type: "Cheeseburger", price: 2.40},
          {type: "Hamburger", price: 2.10},
          {type: "French Fries", price: 1.60}
        ],
        order: [],
        total: 0
      }
    }

addToOrder = (newItem) => {
  console.log(newItem)
  this.setState({ order: [...this.state.order, newItem]})
}    

render () {
  return (
    <>
      <Menu
        menuWithPrices = { this.state.menuWithPrices }
        addToOrder = { this.addToOrder }
      />

      <h1>Order</h1>
      <Order order = { this.state.order } />
    </>
  )
  
 }
}

export default App
