import React, { Component } from 'react'

class MenuItems extends Component {
  render() {
    return(
      <>
        <h3>Burritos!</h3>
        <ul>
          {this.props.foodItems.map((item, index)=>{
            return (
            <li><img src={'https://img.theculturetrip.com/wp-content/uploads/2018/04/caliburrito.jpg'}></img>{item.type} ${item.price}<button onClick={() => this.props.addItem(item.type, item.price)}> Order This! </button> </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default MenuItems;