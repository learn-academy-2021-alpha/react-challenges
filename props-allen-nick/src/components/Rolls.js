import React, { Component } from 'react';

class Rolls extends Component{
    constructor() {
        super();
        this.state = {
          results: undefined
        }
      }

    render(){
        return(
        <div>
            <h2>Rolls</h2>
            <h3>{this.props.logOfResults}</h3>
        </div>
        )
    }
}

export default Rolls