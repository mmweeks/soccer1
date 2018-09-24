import React, { Component } from 'react';
import Card from './card';

class Field extends Component {
  getName(position) {
    const list = this.props.players.filter(player => player.position === position);
    return list.length? `${list[0].NAME} (${list[0].NUMBER})` : 'No Player'; 
  }
  render() {
    return (
    <div className="field-side">
      <h1>{this.props.gameName}</h1>
      <h4>playing - {this.props.opponent}</h4>
      <div className="field">
      <div className="player-row">
          <div className="player">
            <Card position='Right_Forward' player={this.getName('Right_Forward')} />
            <label>RIGHT FORWARD - {this.getName('Right_Forward')}</label>
          </div>
          <div className="player">
            <Card position='Left_Forward' player={this.getName('Left_Forward')} />
            <label>LEFT FORWARD - {this.getName('Left_Forward')}</label>
          </div>
        </div>
        <div className="player-row">
          <div className="player">
            <Card position='Stopper' player={this.getName('Stopper')} />
            <label>STOPPER - {this.getName('Stopper')}</label>
          </div>
        </div>
        <div className="player-row">
          <div className="player">
            <Card position='Right_Mid' player={this.getName('Right_Mid')} />
            <label>RIGHT MID - {this.getName('Right_Mid')}</label>
          </div>
          <div className="player">
            <Card position='Left_Mid' player={this.getName('Left_Mid')} />
            <label>LEFT MID - {this.getName('Left_Mid')}</label>
          </div>
        </div>
        <div className="player-row">
          <div className="player">
            <Card position='Right_Back' player={this.getName('Right_Back')} />
            <label>RIGHT BACK - {this.getName('Right_Back')}</label>
          </div>
          <div className="player">
            <Card position='Left_Back' player={this.getName('Left_Back')} />
            <label>LEFT BACK - {this.getName('Left_Back')}</label>
          </div>
        </div>
        <div className="player-row">
          <div className="player">
            <Card position='Sweeper' player={this.getName('Sweeper')} />
            <label>SWEEPER - {this.getName('Sweeper')}</label>
          </div>
        </div>
        <div className="player-row">
          <div className="player">
            <Card position='Keeper' player={this.getName('Keeper')} />
            <label>KEEPER - {this.getName('Keeper')}</label>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Field;
