import React, { Component } from 'react'

class DiceThrow extends Component {
    constructor(){ //
        super();
        this.state = {
            rolls: undefined
        }
    }

getDiceNumber = () => {
    const newDiceNumber = this.props.randomNumber();
    this.setState({rolls: newDiceNumber})
}
render () {
    return (
        <div>
            <h1>DICE</h1>
            <p>{this.state.rolls}</p>
            <button onClick = {this.getDiceNumber}>CLICK HERE TO ROLL</button>
        </div>

    )
}
}

export default DiceThrow;