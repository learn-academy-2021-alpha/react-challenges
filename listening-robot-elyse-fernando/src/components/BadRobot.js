import React, { Component } from 'react'


class BadRobot extends Component {
   
   
   
    handleBad = () => {
          return this.props.userSays.split("").map(value => {
            if( typeof value === "string"){
            return "Bla"
            }
        }) .join(" ")
    }
        
        


    render() {
        return (
            <>
            <h1> Bad robot: </h1>
            <p>Did you say "{ this.handleBad()}"????</p>
            </>
    )
}

}



export default BadRobot;
