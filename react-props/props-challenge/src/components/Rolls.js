import React, { Component } from 'react'
import Dice from './Dice.js' 

class RollLog extends Component {
    constructor(props){
        super(props);
        this.state = { log: undefined }
    }

    loggedRolls(){
        const loggedNumber = this.props.diceRoll();
        this.setState({log: loggedNumber})
    }

    render(){
        return(
            <div>
            <p>
                You rolled: {this.state}
            </p>
            </div>
        )
    }


}


export default RollLog;