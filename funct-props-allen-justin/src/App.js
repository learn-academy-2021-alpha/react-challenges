import React, { Component } from 'react'
// import logo from './logo.svg';
import Menu from './components/Menu'
import MenuNew from './components/MenuNew'
import Order from './components/Order'
import './App.css';




class App extends Component {
    constructor (props){
      super(props)
      this.state = {
        burgers: ["Double-Double", "Cheeseburger", "Hamburger", "French Fries"],
        prices: ["3.45", "2.40", "2.10", "1.60"],
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
      <h1>Menu</h1>
      <Menu burgers = { this.state.burgers } price = {this.prices} addToOrder = {this.addToOrder} />

      <h1>Menu Stretch Goal</h1>
      { this.state.menuWithPrices.map((item, index ) => {
        return (
            <li key= { index }>
                <button onClick={ () => this.addToOrder(item.type) }> 
                { item.type } { item.price }
                </button>
            </li>
        )
        })}

      <h1>Order</h1>
      <Order order = { this.state.order } />
    </>
  )
  
 }
}

export default App
