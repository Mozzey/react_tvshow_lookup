import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    show: ''
  };

  componentDidMount() {
    axios
      .get(`http://api.tvmaze.com/singlesearch/shows?q=fringe`)
      .then(res => {
        // console.log(res.data);
        this.setState({
          show: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
