import React, { Component } from 'react';
//if I delete logo, would show up error
import './style/App.css';
import EarthquakeList from "./components/EarthquakeList";
import EarthquakeInfo from './components/EarthquakeInfo';


class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="title">
              <div className="my-header">
                 Earthquake!!!
              </div>
          </div>
          <EarthquakeInfo />
          <h2>Welcome to React</h2>
          <EarthquakeList />
      </div>
    );
  }
}

export default App;
