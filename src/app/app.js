import React, { Component } from 'react';
import { Link } from 'react-router';

import './app.scss';

import { HEROES } from './mock-heroes';

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Tour of heroes</h1>
        <div class="nav">
          <Link to="/dashboard" activeClassName="active">Dashboard</Link>
          <Link to="/heroes" activeClassName="active">Heroes</Link>
        </div>
        {React.cloneElement(this.props.children, { data: HEROES })}
      </div>
    );
  }
}
