import React, { Component } from 'react'
import './App.css'
import './components/Items'
import './components/Cart'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      food: [ 'fish - $5 lb' , 'broccoli - 99c', 'berries - $2.99 pt' , 'english muffins $3' , 'yogurt $2' ],
      household: ['paper towels $10' , 'toilet paper $25' , 'toothpaste $1' , 'deodorant $2' ,'body wash $4'],
      cart: []
    }
  }
addItemsToCart = (newItem) => {
  this.setState({ cart: [...this.state.cart, newItem] })
}

render(){
  return(
    <>
    <h1>Grocery App</h1>
    <h3>Please Select Food Items</h3>
    <h3>Please Select Household Items</h3>
    </>
  )
 }
}
export default App