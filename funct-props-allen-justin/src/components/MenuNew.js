import React, { Component } from 'react'

class MenuNew extends Component {
    render () {
        return (
            <>
              <h1> In-N-Out </h1>
                { this.props.menuWithPrices.map((item, index ) => {
                return (
                    <li key= { index }>
                        <button onClick={ () => this.props.addToOrder(item) }> 
                        { item } 
                        </button>
                    </li>
                )
                })}
            </>
        )
    }
}

export default MenuNew