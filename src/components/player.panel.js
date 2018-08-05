import React, { Component } from 'react';

class PlayerPanel extends Component {

  handleClick() {
    alert(window.localStorage.getItem(`oneseconds`));
  };

  render() {
    return (
    <div className="player-panel">
        <button type="button" className="btn" onClick={this.handleClick.bind(this)}>TEst</button>
    </div>
    );
  }
}

export default PlayerPanel;
