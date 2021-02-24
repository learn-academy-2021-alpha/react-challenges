import React, { Component } from "react";
class TotalPrice extends Component {
	render() {
		return (
			<>
        <h2>Total Price</h2>
        <p>{ this.props.total }</p>
			</>
		);
	}
}
export default TotalPrice;
