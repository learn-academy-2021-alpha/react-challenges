import React, { Component } from 'react'


class GoodRobots extends Component {



    render() {
        return (
            <>
            <h1> Good robot:</h1>
            <p>I hear you saying "{ this.props.userSays }"</p>
            </>
    )
}
}

export default GoodRobots;
