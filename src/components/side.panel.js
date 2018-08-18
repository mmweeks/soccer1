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
            // this.handleStopClick();
            this.setState({
              gameMessage: 'SECOND HALF'
            });
        } else if (this.state.secondsElapsed === GAME_TIMES.GAME) {
        //   this.handleResetClick();
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
    isPaused() {
        return this.incrementer === this.state.lastClearedIncrementer;
    }
    render() {
        return (
        <div className="panel">
        {(this.props.gameIsSet
            ? <div>
            <GameWatch 
                isPaused={this.isPaused.bind(this)}
                handleStopClick={this.handleStopClick.bind(this)}
                handleResetClick={this.handleResetClick.bind(this)}
                handleStartClick={this.handleStartClick.bind(this)}
                gameMessage={this.state.gameMessage}
                secondsElapsed={this.state.secondsElapsed} />
            <PlayerPanel onPlayerChange={this.props.onPlayerChange} onTheField={this.props.onTheField} gameTime={this.state.secondsElapsed}/>
            </div>
            : <div>
                <label>Name</label><input type="text" onChange={this.props.updateName} />
                <label>Opponent</label><input type="text" onChange={this.props.updateOpponent} />
                <button className="btn" onClick={this.props.updateGame}>Save</button>
              </div>
        )}
        </div>
        );
    }
}

export default SidePanel;
