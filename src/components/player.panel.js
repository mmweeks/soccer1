import React, { Component } from 'react';
import Positions from '../data/positions';
import Team from '../data/blue.team';
import { LEAVING, ENTERING } from '../data/events';

class PlayerPanel extends Component {
  constructor(props) {
      super(props);
      this.state = { 
          players: Team.PLAYERS,
          positions: Positions,
          pendingChanges: []
      };
      console.log(Team.PLAYERS, this.state.players);
      console.log(Positions, this.state.positions);
  }

  handleAddClick() {
    const selectedPlayerIndex = document.getElementById('player').selectedIndex;
    const selectedPlayer = this.state.players[selectedPlayerIndex];
    const selectedPositionIndex = document.getElementById('position').selectedIndex;
    const selectedPosition = this.state.positions[selectedPositionIndex];

    const changes = this.state.pendingChanges.concat(Object.assign({}, selectedPlayer, {
      playing: selectedPosition,
      action: ENTERING
    }));
    if(this.props.onTheField.length) {
      this.props.onTheField.forEach(player => {
        if (player.position === selectedPosition) {
          changes.push(Object.assign({}, player, {
              action: LEAVING
          }));
        }
      })
    }
    console.log(changes);
    this.setState({
      pendingChanges: changes
    });
  };

  handleClick() {
    this.props.onPlayerChange(this.state.pendingChanges.map(change => (Object.assign({}, change, {
      time: this.props.gameTime
    }))));
    this.setState({
      pendingChanges: []
    });
  };

  getChangeString(change) {
    return `${change.NAME} (${change.NUMBER}) is ${change.action} the game at ${change.playing}.`;
  };

  render() {
    return (
    <div className="player-panel">
        <label>Player</label>
        <select id="player">
        {(this.state.players.map(player =>
          <option value="{player.NUMBER}">{player.NAME}</option>
        ))}
        </select>
        <br />
        <label>Position</label>
        <select id="position">
        {(this.state.positions.map(pos =>
          <option value="{pos}">{pos}</option>
        ))}
        </select>
        <br />
        <button type="button" className="btn" onClick={this.handleAddClick.bind(this)}>Add</button>
        <br />
        <hr />
        <br />
        <div>
          <label>Pending Changes</label>
          <br />
          {(this.state.pendingChanges.length?
            this.state.pendingChanges.map(change =>
              <div>{this.getChangeString(change)}</div>
            )
          : 'No Changes'
          )}
        </div>
        <br />
        <button type="button" className="btn" onClick={this.handleClick.bind(this)}>Make Changes</button>
    </div>
    );
  }
}

export default PlayerPanel;
