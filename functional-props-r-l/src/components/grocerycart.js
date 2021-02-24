import React, { Component } from "react";
class GroceryCart extends Component {
	render() {
		return (
		<>
		<h3>Cart Items</h3>
			<ul>
				{ this.props.cart.map((item, index) => {
					return(
						<li key={ index }>
						{ item }
						</li>
					)}
				)}
			</ul>

		</>
		)
	}
}
export default GroceryCart;
