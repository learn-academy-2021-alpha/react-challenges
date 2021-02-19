import React, { Component } from "react"

class Colors extends Component { 
    constructor(props){
        super(props)
        this.State = {
            color: ["white", "red", "blue" , "pink"]

        }
    }
    //how we want to change the box
colorChange = () => {
 for (let i=0;i<this.State.length;i++){
    this.setState ( {color: this.State.color[i]} )
 }
}
  
    render() {
      return (
          <>
            this.setState({color})
          </>
      )
    }
  }
export default Colors