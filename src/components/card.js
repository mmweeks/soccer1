import React, {Component} from 'react';
import classNames from 'classnames';

class Card extends Component {
    onField() {
        return Boolean(this.props.position);
    }
    render() {
      return (
          <div className="player-card">
          <div className={classNames("player-onField", {
              "on" : this.onField()
          })}></div>
            <div className="player-position">{this.props.position}</div>
            <div className="player-name">{this.props.player}</div>
            <div className="player-action"></div>
          </div>
      );
    }
};

export default Card;