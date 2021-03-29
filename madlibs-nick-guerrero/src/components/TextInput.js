import React, { Component } from 'react'

class TextInput extends Component {
    render() {
        return (
            <>
              <ul>
        { this.props.type.map((item, index) => {
          return(
            <li key={ index }>
              { item }
              <form>
                <label>
                  <input type="text" item="input here" />
                </label>
              </form>
            </li>
          )
        })}
        </ul>
            </>
        )
    }
}

export default TextInput