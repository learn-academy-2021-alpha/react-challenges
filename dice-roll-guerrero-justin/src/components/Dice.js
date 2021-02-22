import React, { Component } from 'react'

class DiceThrow extends Component {
render () {
    return (
        <div>
            <h1>Dice</h1>
            <button onClick = {this.state.rolls}>click here to roll</button>
        </div>

    )
}
}

export default DiceThrow