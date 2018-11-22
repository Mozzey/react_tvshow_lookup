import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navigation">
        <h2>
          <a href="/">MagickTVLookup</a>
        </h2>
      </nav>
    );
  }
}

export default Navbar;
