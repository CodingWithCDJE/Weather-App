import React, { Component } from 'react';
import '../Css/SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateTerm: '',
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.stateTerm);
  }

  render() {
    const { stateTerm } = this.state;
    return (
      <div className='searchbar-main-container'>
        <form onSubmit={this.onFormSubmit} className='searchbar-form'>
          <div className='searchbar-field'>
            <label className='searchbar-label'>
              <b>Weather Search</b>
            </label>
            <input
              className='searchbar-input-field'
              type='text'
              value={stateTerm}
              onChange={(event) =>
                this.setState({ stateTerm: event.target.value })
              }
              placeholder='Search by City or Zip Code'
            />
            <input type='submit' className='searchbar-input-submit' />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
