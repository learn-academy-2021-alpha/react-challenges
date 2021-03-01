  
import React, { Component } from 'react'


class BadRobot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      badRobotInput: ""
    }
  }

  translatePoorly = (string) => {
    // let strLength = string.length
    // We'll split the string and use a map to poorly translate the input
    let arrayOfLetters = string.split('').map((value, index) => {
      // The following indices will have 'B'
      // 0, 3, 6, 9 -> Modulo of 3, we should get back 0
      if (index % 3 === 0) {
        return 'B'
      } else if (index % 3 === 1) {
        // The following indices will have 'L'
        // 1, 4, 7, 10 -> Modulo of 3, we should get back 1
        return 'L'
      } else if (index % 3 === 2) {
        // The following indices will have 'A'
        // 2, 5, 8, 11 -> Modulo of 3, we should get back 2
        return 'A'
      }

    })
    // Return a string of BLABLABLA by joining the array
    return arrayOfLetters.join('')
  }

  render() {
    // console.log( this.translatePoorly )
    return (
      <>
        <h1>Bad Robot</h1>

        <p>{ this.translatePoorly(this.props.robotInput) }</p>
      </>
    )
  }
}
export default BadRobot