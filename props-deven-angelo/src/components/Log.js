import React, { Component } from 'react'

class Dice extends Component {
    render() {
    return (
        <>
           { this. props.diceLog.map((value , index) => {
               return (
                   <p key={ index }>
                       { value }
                   </p>
               )
           })}
        </>
        )
    }
}
export default log