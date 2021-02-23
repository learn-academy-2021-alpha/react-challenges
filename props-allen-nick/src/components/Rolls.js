import React, { Component } from 'react';

class Rolls extends Component{
    

    render(){
        return(
        <div>
            <h2>Rolls</h2>
          
            {
              this.props.logOfResults.map((value, index) => {
              return <h3 key={index}>{value}</h3>
              })
            } 
        </div>
        )
    }
}

export default Rolls