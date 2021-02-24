import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      food: ["eggplant", "cheese", "oreos", "salami", "bread"],
      cart: []
    }
  }

addItemsToList = (newItem) => {
 this.setstate({ cart: [...this.state.cart, newItem] })
}



  render() {
    return (
      <>
        <h1>Grocery List</h1>
        <ul>{
          this.state.food.map((item, index) => {
            return(
              <li key={index}>
              <button onClick= { () => this.addItemsToList(item)}> {item}</button>
              </li>
            )
          })
        }
        </ul>
        <GroceryCart cart={this.state.cart} />
      </>
    );
  }
}
export default App;
