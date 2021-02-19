import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: "purple",
			colorArray: ["purple", "red", "orange", "blue"],
		};
	}

	changeColor = () => {
		this.color({ 
			color: this.state.color,
		});
	};

  const {colorArray} =  this.state
  return colorArray[Math.floor(Math.random()*colorArray.length)]
  return this.state.colorArray

render() {
		return (
			<p>
				<p></p>
				<button onClick={this.changeColor} style={{ color: this.state.color }}>
					change color
				</button>
			</p>
		);
	}
}

export default App;
