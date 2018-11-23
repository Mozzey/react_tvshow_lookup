import React, { Component } from 'react';
import Shows from '../shows/Shows';
import Search from '../shows/Search';

class Index extends Component {
  render() {
    return (
      <div style={{ width: '80%', margin: '0 auto' }}>
        <Search />
        <Shows />
      </div>
    );
  }
}

export default Index;
