import React, { Component } from 'react'

class RollNumber extends Component {
constructor () {
    super();
}


render () {
    return (
        <div>
            <h1>ROLLS</h1>
            <h2>{this.props.randomizer} </h2>
        </div>
    )
}
}

export default RollNumber;