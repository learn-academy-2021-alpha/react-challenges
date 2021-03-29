// import React, { Component } from 'react'

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       info: ''
//     }
//   }

//   getInfo = () => {
//     fetch('https://ipapi.co/json/')
//     .then(response => {
//       return response.json()
//     })
//     .then(payload => {
//       this.setState({ info: payload })
//     })
//   }

//   render() {
//     return(
//       <>
//         <h1>My Info</h1>
//         <p>{ this.state.info.ip }</p>
//         <p>{ this.state.info.city }, { this.state.info.region_code }</p>
//         <button onClick={ this.getInfo }>Get Info</button>
//       </>
//    )
//  }
// }

// export default App

// NASA STUFF

import React, { Component } from 'react';
// import mockData from './mockData.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nasa: null,
      pic: null,
    };
  }

  componentDidMount() {
    fetch(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY'
    )
      .then((response) => {
        return response.json();
      })
      .then((payload) => {
        this.setState({ nasa: payload.photos, pic: payload.photos[0].img_src });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getPic = () => {
    let randomNum = Math.floor(Math.random() * this.state.nasa.length);
    this.setState({ pic: this.state.nasa[randomNum].img_src });
  };

  render() {
    return (
      <>
        <h1>Mars Photos</h1>
        <button onClick={this.getPic}>Click here for Pictures</button>
        <br />
        <img
          src={this.state.pic}
          style={{ height: '400px' }}
          alt='Random generated picture'
        />
      </>
    );
  }
}

export default App;
