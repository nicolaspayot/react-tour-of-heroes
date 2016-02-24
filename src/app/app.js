import React, { Component } from 'react';
import { Dashboard } from './dashboard/dashboard';
import { Heroes } from './hero/list/heroes.js';
import './app.scss';

import { HEROES } from './mock-heroes';

export class App extends Component {
  render() {
    return (
      <div>
        <h1>{ this.props.title }</h1>
        <Dashboard data={HEROES} />
        <Heroes data={HEROES} />
      </div>
    );
  }
}
