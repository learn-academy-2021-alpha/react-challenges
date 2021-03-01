import React, { Component } from 'react'

class Order extends Component {

    render () {
        const orderedItems = this.props.menuInfo.filter((item, index) => {
            return item.qty > 0
        })

        return (
            <>
              <h1>Order</h1>
              <table>
                <thead>
                <tr>
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Extended Cost</th>
                </tr>
                </thead>
                <tbody>
            
                { orderedItems.map((item, index) => {
                return (
                  <tr key= { index }>
                    <td>{ item.type }</td>
                    <td>{ item.qty }</td>
                    <td>${ (item.price * item.qty).toFixed(2) }</td>
                  </tr>
                )
                })}

                </tbody>
                </table>
        </>
        )
    }
}

export default Order


