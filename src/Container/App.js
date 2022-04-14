import React, { Component } from 'react';
import SearchBar from './SearchBar';
import WeatherDisplay from '../Components/WeatherDisplay';
import weather from '../Api/weather';
import '../Css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  async onSearchSubmit(term) {
    const response = await weather.get('/forecast.json', {
      params: {
        key: process.env.REACT_APP_WEATHER_API,
        q: term,
        days: 3,
      },
    });
    console.log();
    this.setState({ results: response.data });
  }

  render() {
    const { results } = this.state;
    return (
      <div className='app-main-container'>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <WeatherDisplay results={results} />
      </div>
    );
  }
}

export default App;
