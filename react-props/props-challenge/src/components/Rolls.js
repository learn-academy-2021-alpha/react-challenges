import React, { Component } from 'react'
import Dice from './Dice.js' 

class RollLog extends Component {
    constructor(props){
        super(props);
        this.state = { log: [] }
        // not sure if this should be set to an empty array but I did this because i dont know how to get the log of the rolls to display on the page, so i figured it would need to be an array to stay displayed on the page
    }

    getLogs = () => {
        const newLog = this.props.theLog();
        this.setState({log: newLog})
    }
    // pretty sure there is something wrong in this function


    render(){
        return(
            <div>
            <p> You rolled a: {this.getLogs} </p>
            </div>
        )
    } // also, what is inside of the paragraph tag here is probably wrong as well


}


export default RollLog;