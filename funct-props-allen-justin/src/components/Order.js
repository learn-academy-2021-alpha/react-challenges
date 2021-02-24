import React, { Component } from 'react'

class Order extends Component {
    render () {
        return (
            <>
             { this.props.order.map((item, index) => {
            return(
              <li key= {index }>
                { item } 
            </li>
            )
         })}
        </>
        )
    }
}

export default Order


