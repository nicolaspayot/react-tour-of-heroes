import React, { Component } from 'react';
import { Link } from 'react-router';
import { hero } from './hero/hero';

import './app.scss';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = { heroes: [] };
  }

  componentDidMount() {
    hero.query().then(data => this.setState({ heroes: data }));
  }

  render() {
    return (
      <div>
        <h1>Tour of Heroes</h1>
        <nav>
          <Link to="/dashboard" activeClassName="active">Dashboard</Link>
          <Link to="/heroes" activeClassName="active">Heroes</Link>
        </nav>
        {React.cloneElement(this.props.children, { data: this.state.heroes })}
      </div>
    );
  }
}
