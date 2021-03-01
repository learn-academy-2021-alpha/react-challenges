import React, { Component } from 'react'


class BadRobot extends Component {
  constructor(props){
    super(props)
}


    render() {
        return (
            <>
            <h1> Bad robot</h1>
            <p>Did you say "{ this.props.userSays }"????</p>
            </>
    )
}
}

export default BadRobot;
