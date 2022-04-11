import React, { Component } from 'react';
import SearchBar from './SearchBar';
import WeatherDisplay from '../Components/WeatherDisplay';

class App extends Component {
  constructor() {
    super();
    this.state = {
      weatherResults: [],
    };
  }

  render() {
    return (
      <div>
        <SearchBar />
        <WeatherDisplay />
      </div>
    );
  }
}

export default App;
