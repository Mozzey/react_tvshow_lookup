import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_SHOWS':
      return {
        ...state,
        shows: action.payload
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    shows: [],
    disaptch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  // componentDidMount() {
  //   axios
  //     .get(`http://api.tvmaze.com/search/shows?q=ncis`)
  //     .then(res => {
  //       // console.log(res.data);
  //       this.setState({
  //         shows: res.data
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
