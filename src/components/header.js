import React, { Component } from 'react';
import soccerBall from './soccer.svg';

class SoccerHeader extends Component {
  render() {
    return (
    <header className="header">
        <div className="header-item"><img src={soccerBall} className="soccer-ball" alt="logo" /></div>
        <div className="header-item"><h1 className="App-title">Game Stats</h1></div>
    </header>
    );
  }
}

export default SoccerHeader;
