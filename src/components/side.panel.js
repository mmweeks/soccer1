import React, { Component } from 'react';
import PlayerPanel from './player.panel';
import GameWatch from './game.watch';


const GAME_TIMES = {
    HALF: 6 * 6,
    GAME: 6 * 6 * 2
};

class SidePanel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            game: {
                name: null,
                opponent: null,
                isSet: false
            },
            secondsElapsed: 0,
            lastClearedIncrementer: null,
            gameMessage: 'FIRST HALF'
        };
        this.incrementer = null;
    }
      
    handleStartClick() {
      if (this.state.secondsElapsed === 0) {
          this.setState({
              gameMessage: 'FIRST HALF'
          });
      }
      this.incrementer = setInterval( () => {
        this.setState({
          secondsElapsed: this.state.secondsElapsed + 1
        });
        if (this.state.secondsElapsed === GAME_TIMES.HALF) {
            this.handleStopClick();
            this.setState({
              gameMessage: 'SECOND HALF'
            });
        } else if (this.state.secondsElapsed === GAME_TIMES.GAME) {
          this.handleResetClick();
      }
      }, 1000);
    }
    
    handleStopClick() {
      clearInterval(this.incrementer);
      this.setState({
        lastClearedIncrementer: this.incrementer
      });
    }
    
    handleResetClick() {
      clearInterval(this.incrementer);
      this.setState({
        gameMessage: 'GAME OVER',
        secondsElapsed: 0
      });
    }
    onSecondUpdate(isUpdate) {
        this.setState({
        });
        return this.state.secondsElapsed;
    }
    updateGame() {
        this.setState({
            game: {
                isSet: true,
                name: this.state.game.name,
                opponent:  this.state.game.opponent
            }
        });
        console.log(this.state.game);
    }
    updateName(e) {
        this.setState({
            game: {
                isSet: false,
                name: e.target.value,
                opponent:  this.state.game.opponent
            }
        });
        console.log(this.state.game);
    }
    updateOpponent(e) {
        this.setState({
            game: {
                isSet: false,
                name: this.state.game.name,
                opponent: e.target.value
            }
        });
        console.log(this.state.game);
    }
    isPaused() {
        return this.incrementer === this.state.lastClearedIncrementer;
    }
    render() {
        return (
        <div className="panel">
        {(this.state.game.isSet
            ? <GameWatch 
                isPaused={this.isPaused.bind(this)}
                handleStopClick={this.handleStopClick.bind(this)}
                handleResetClick={this.handleResetClick.bind(this)}
                handleStartClick={this.handleStartClick.bind(this)}
                gameMessage={this.state.gameMessage}
                secondsElapsed={this.state.secondsElapsed} />
            : <div>
                <label>Name</label><input type="text" onChange={this.updateName.bind(this)} />
                <label>Opponent</label><input type="text" onChange={this.updateOpponent.bind(this)} />
                <button className="btn" onClick={this.updateGame.bind(this)}>Save</button>
              </div>
        )}
            <PlayerPanel />
        </div>
        );
    }
}

export default SidePanel;
