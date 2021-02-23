import React, { Component } from 'react'

class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = { number: undefined}

    }

    diceRoll = () => {
        const random = Math.floor(Math.random() * 6 );
        this.setState({number: random});

    }
    
    render() {
        return(
            <>
            <button onClick={this.diceRoll}>Roll the Dice!</button>

            </>
        )
    }
}


export default Dice;