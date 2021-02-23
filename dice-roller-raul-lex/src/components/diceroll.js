import React, { Component } from "react";

// <Dice sides = { dice } rolling = {rolling} />
// <button className={handleButton}
// onClick={this.roll}>
// </button>


class DiceRoll extends Component {
	static defaultNumbers = {
		sides: [1,2,3,4,5,6]
	}
	constructor(props) {
		super(props)
		this.state = {
			dice:1
		}
	this.roll = this.roll.bind(this)
	}
	roll() {
		const { sides } = this.props
		this.setState({
			dice:sides[Math.floor(Math.random() * sides.length)]
		})
	}
	render() {
		const { dice } = this.state
		return(
		<div className="Roller">
			<div className="rollcontainer">
				
			</div>
		</div>
		)
	}
}
export default DiceRoll;
