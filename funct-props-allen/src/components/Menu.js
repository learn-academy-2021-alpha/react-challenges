import React, { Component } from 'react'

class Menu extends Component {
    render () {
        return (
            <>
              <h1>Menu</h1>
              <table>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Add to Order</th>
                </tr>
            
                { this.props.menuWithPrices.map((item, index ) => {
                return (
                  <tr key= { index }>
                    <td>{ item.type }</td>
                    <td>${ item.price.toFixed(2) }</td>
                    <td>
                      <button onClick={ () => this.props.addToOrder(item.type) }> 
                        Add
                      </button>
                    </td>
                  </tr>
                )
                })}

                </table>
            </>
        )
    }
}

export default Menu