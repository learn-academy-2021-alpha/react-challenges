import React, { Component } from 'react'

class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = { number: undefined };
        // initializing the number to undefined

    }

    getDiceRoll = () => {
        const newRoll = this.props.rolledDice();
        console.log(newRoll);
        // just to see how the roll is working in the console (in inspect page)
        this.setState({number: newRoll})
    }
    // fetches the roll from the diceRoll-funtion (named rolledDice) in Apps, and sets the state of number which was initiated as undefined, to the new rolled random number
    
    render() {
        return(
            <>
            <button onClick={this.getDiceRoll}>Roll the Dice!</button>
            <p>You rolled on Dice and your number is: {this.state.number}</p>

            </>
        )
        // the paragraph tag is just displaying the current roll
    }
    // setting up a button that will read "Roll the Dice!" and will get the number populated by the diceRoll-function
}


export default Dice;