import React, { Component } from 'react';
import Field from './field';
import SidePanel from './side.panel';
import { ENTERING, LEAVING } from '../data/events';

class SoccerBody extends Component {
  constructor(props) {
      super(props);
      this.state = { 
        game: {
            name: null,
            opponent: null,
            isSet: false
        },
        onTheField: [],
        events: []
      };
  }
  onPlayerChange(playersList) {
    console.log(playersList);
    const events = [];
    let onTheField = this.state.onTheField;
    playersList.forEach(player => {
      switch(player.action) {
        case ENTERING: {
          events.push({
            NUMBER: player.NUMBER,
            gameTime: player.time,
            position: player.playing,
            action: player.action
          });
          onTheField.push({
            NUMBER: player.NUMBER,
            NAME: player.NAME,
            position: player.playing
          });
          break;
        }
        case LEAVING: {
          onTheField = onTheField.filter(playing => !(player.NUMBER !== playing.NUMBER && player.position !== playing.position));
          break;
        }
        default:
          console.log('not handled', player);
      }
    });
    this.setState({
      events: this.state.events.concat(events),
      onTheField: onTheField
    });
  }
  onEvent(event) {
    this.state.events.push(event);
    if (event.isSave) {

    }
  }
  updateGame() {
      this.setState({
          game: {
              isSet: true,
              name: this.state.game.name,
              opponent:  this.state.game.opponent
          }
      });
  }
  updateName(e) {
      this.setState({
          game: {
              isSet: false,
              name: e.target.value,
              opponent:  this.state.game.opponent
          }
      });
  }
  updateOpponent(e) {
      this.setState({
          game: {
              isSet: false,
              name: this.state.game.name,
              opponent: e.target.value
          }
      });
  }
  render() {
    return (
    <div className="body flex">
        <SidePanel 
          gameIsSet={this.state.game.isSet}
          updateName={this.updateName.bind(this)} 
          updateOpponent={this.updateOpponent.bind(this)} 
          updateGame={this.updateGame.bind(this)}
          onPlayerChange={this.onPlayerChange.bind(this)}
          onTheField={this.state.onTheField}
          onEvent={this.onEvent.bind(this)} />
        <Field
          gameName={this.state.game.name}
          opponent={this.state.game.opponent}
          players={this.state.onTheField} />
    </div>
    );
  }
}

export default SoccerBody;
