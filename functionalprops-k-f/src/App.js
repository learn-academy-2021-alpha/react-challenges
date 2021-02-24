import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      foodItems: [{type: "califonia", price: 5.50} , {type: "shrimp", price: 6.50} , {type: "carne asada", price: 4.75} ,{type: "carnitas", price: 4.75}, {type: "lengua", price: 6}]
    }
  }
  render (){
  return (
    <>
    <h1>Kevinn and Fernando's Mexican food!!</h1>
    <h3>Burritos!</h3>
    <ul>
    {this.state.foodItems.map((item, index)=>{
      return (
        <li>{item.type} ${item.price}<button> Order This! </button> </li>
        
      )
    })}
    </ul>
    </>

  )
  }
}

export default App;
