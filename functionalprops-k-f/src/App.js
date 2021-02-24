import React, { Component } from 'react';
import MenuItems from './components/MenuItems'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      foodItems: [{type: "califonia", price: 5.50} , {type: "shrimp", price: 6.50} , {type: "carne asada", price: 4.75} ,{type: "carnitas", price: 4.75}, {type: "lengua", price: 6}],
      foodOrder: [],
      foodPrice: 0,
      foodPriceWithTax: 0,
    }
  }

  addItem = (newItem, priceItem) => {
    this.setState({ 
      foodOrder: [...this.state.foodOrder, newItem],  
      foodPrice: this.state.foodPrice + priceItem,
      foodPriceWithTax: (this.state.foodPrice + priceItem + (priceItem * 0.0775)).toFixed(2)
    })
  }

  render (){
  return (
    <>
    <h1>Kevinn and Fernando's Mexican food!!</h1>
    <MenuItems foodItems={this.state.foodItems} addItem={this.addItem} />
    <h3>Your Order:</h3>
    <p>{this.state.foodPrice}</p>
    <p>{this.state.foodPriceWithTax}</p>
    <ul>
      {this.state.foodOrder.map((orderItem, index) => {
        return (
          <li>{orderItem}</li>
        )
      })}
    </ul>
    </>

  )
  }
}

export default App;
