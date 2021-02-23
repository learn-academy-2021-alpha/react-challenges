import React, { Component } from 'react'


class Rolls extends Component {
  constructor() {
    super()
    this.state = {
      loggedRolls: []
    }
  }

  // rollLogger = () => {
  //   // loggedRolls.push(this.props.logRolls)
  //   this.setState({ loggedRolls: this.state.loggedRolls.push(this.props.logRolls) })
  // }

  render() {
    return (
      <>
        <h1>Rolls</h1>
        <p>{this.props.numberArray}</p>
      </>
    )
  }
}



export default Rolls;
