import React, { Component } from 'react';
import Show from './Show';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';

class Shows extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { shows } = value;
          if (shows === undefined || Object.keys(shows).length === 0) {
            return <Spinner />;
          } else {
            return (
              <div
                className="shows-container"
                style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}
              >
                {shows.map((show, index) => {
                  return <Show key={index} show={show} />;
                })}
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Shows;
