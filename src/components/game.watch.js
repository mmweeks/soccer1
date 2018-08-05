import React, { Component } from 'react';

const formattedSeconds = (sec) => {
    return Math.floor(sec / 60) + ':' + ('0' + sec % 60).slice(-2);
}

class GameWatch extends Component {

  render() {
    return (
        <div className="game-watch">
            <h1 className="stopwatch-timer">{formattedSeconds(this.props.secondsElapsed)}</h1>
    
            <div className="buttons">
            {(this.props.secondsElapsed === 0
            ? <Button className="start-btn" onClick={this.props.handleStartClick}>Start</Button>
            : this.props.isPaused()
            ? <Button className="start-btn" onClick={this.props.handleStartClick}>Resume</Button>
            : <Button className="stop-btn" onClick={this.props.handleStopClick}>Timeout</Button>
            )}
            {(this.props.secondsElapsed === 0
            ? <div />
            : <Button className="stop-btn" onClick={this.props.handleResetClick}>End</Button>
            )}
            </div>
            {(
                <div>{this.props.gameMessage}</div>
            )}
            {/* <ul className="stopwatch-laps">
            { this.state.events.map((lap, i) =>
                <li className="stopwatch-lap"><strong>{i + 1}</strong>/ {formattedSeconds(lap)}</li>)
            }
            </ul> */}
        </div>
    );
  }
}

const Button = (props) =>
  <button type="button" {...props} className={"btn " + props.className } />;

export default GameWatch;
