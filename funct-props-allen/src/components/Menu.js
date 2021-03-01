import React, { Component } from 'react'

class Menu extends Component {
    render () {
        return (
            <>
              <h1>Menu</h1>
              <table>
                <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Add to Order</th>
                </tr>
                </thead>
                <tbody>
            
                { this.props.menuInfo.map((item, index) => {
                return (
                  <tr key= { index }>
                    <td>{ item.type }</td>
                    <td>${ item.price.toFixed(2) }</td>
                    <td>
                      <button onClick={ () => this.props.addToOrder(index) }> 
                        Add
                      </button>
                    </td>
                  </tr>
                )
                })}

                </tbody>
                </table>
            </>
        )
    }
}

export default Menu