import React, { Component } from 'react';

import './app.scss';

import { HEROES } from './mock-heroes';

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Tour of heroes</h1>
        {React.cloneElement(this.props.children, { data: HEROES })}
      </div>
    );
  }
}
