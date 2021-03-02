import React, { Component } from 'react'


class RozBot extends Component {


handleRoz = () => {
//make every character in userSays an array
//map through each letter
// console.log("roz:",this.props.userSays);
  return this.props.userSays.split("").map((value, index) => {
    if(index % 3 === 0){
      return "always"
    }
    else if (index % 3 === 1){
      return "watching"
    }
    else if (index % 3 === 2){
      return "wizowski"
    }
  }) .join(" ")
}




    render() {
        return (
            <>
              <h1> Rozbot:</h1>
              { this.handleRoz()}
            </>
    )
}

}


export default RozBot;
