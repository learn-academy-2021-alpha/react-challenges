import React, { Component } from 'react'

class Menu extends Component {
    render () {
        return (
            <>
              <h1> In-N-Out </h1>
             { this.props.burgers.map((item, index ) => {
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

export default Menu