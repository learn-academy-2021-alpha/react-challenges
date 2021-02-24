import React, { Component } from "react";
import GroceryItems from "./components/groceryitems";
import GroceryCart from "./components/grocerycart";
import TotalPrice from "./components/totalprice";


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			food: ["banana", "apple", "pineapple", "orange", "grapes"],
			price: [1.00, 0.75, 2.00, 1.50, 0.25],
			cart: [],
			total: 0,
		};
	}

addItemToCart = (newItem) => {
	{this.setState({ cart: [...this.state.cart, newItem]})}
}
addPriceToTotal = (price) => {
	{this.setState({ total: [...this.state.total + price]})}
}

	render() {
		return (
			<>
				<h1>Food menu</h1>
				<GroceryItems
					food={this.state.food}
					price={this.state.price}
					addItemToCart={this.addItemToCart}
					addPriceToTotal={this.addPriceToTotal}
				/>
				<TotalPrice price={this.state.total} />
				<GroceryCart cart={this.state.cart} />
			</>
		);
	}
}
export default App;
// As a developer, I am tasked with creating a food ordering application in React. This is the first iteration of an application that is going to be much larger in the future, so I am tasked with creating a solid foundation from which the code base can grow.

// As a user, I can see an application that has a list of food items and the price of each item
// As a user, I can select an item I wish to order
// As a user, I can see the items I have selected displayed on the page
// Stretch Challenges
// As a user, I can see the total cost of my current order
// As a user, I can see both the base total of my food selections and the total that includes sales tax
// As a user, I can see the total that includes sales tax rounded to two decimals
// As a user, I can see an image of my food selection on the menu
