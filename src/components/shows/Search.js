import React, { Component } from 'react';
import { Consumer } from '../../context';
import axios from 'axios';
import './search.css';

class Search extends Component {
  state = {
    showName: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  findShow = (dispatch, e) => {
    e.preventDefault();
    axios
      .get(`http://api.tvmaze.com/search/shows?q=${this.state.showName}`)
      .then(res => {
        console.log(res.data);
        dispatch({
          type: 'SEARCH_SHOWS',
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <form
              className="search-container"
              onSubmit={this.findShow.bind(this, dispatch)}
            >
              <input
                type="text"
                className="search-bar"
                placeholder="Search for a show..."
                name="showName"
                value={this.state.showName}
                onChange={this.onChange}
              />
              <button type="submit" className="search-btn">
                Search
              </button>
            </form>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
