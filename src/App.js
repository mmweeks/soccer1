import React, { Component } from 'react';
import './App.css';
import SoccerHeader from './components/header';
import SoccerBody from './components/body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SoccerHeader />
        <SoccerBody />
      </div>
    );
  }
}

export default App;
