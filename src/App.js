import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import { Provider } from './context';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider>
          <Navbar />
          <Index />
        </Provider>
      </div>
    );
  }
}

export default App;
