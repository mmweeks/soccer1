import React, { Component } from 'react';
import Field from './field';
import SidePanel from './side.panel';

class SoccerBody extends Component {
  render() {
    return (
    <div className="body flex">
        <SidePanel />
        <Field />
    </div>
    );
  }
}

export default SoccerBody;
