import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  apikey = 'e3d1ce1163b9ce15e2c2477431d0e3e2';
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getByCoords(data) {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + data.latitude + "&lon=" + data.longitude + "&appid=" + this.apikey)
      .then((res) => res.json())
      .then((result => {
        console.log(result);
      }))
  }

  getlocation() {
    let promise = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve(position);
      });
    }).then(data => {
      this.getByCoords(data.coords);
    })
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }
    this.getlocation();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
