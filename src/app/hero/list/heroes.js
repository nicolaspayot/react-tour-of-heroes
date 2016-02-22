import React, { Component } from 'react';
import './heroes.scss';

export class Heroes extends Component {
  render() {
    const heroes = this.props.data;
    const heroNodes = heroes.map(hero => {
      return (
        <li key={hero.id}>
          <span className="badge">{hero.id}</span> {hero.name}
        </li>
      );
    });
    return (
      <div>
        <h2>My heroes</h2>
        <ul className="heroes">
          {heroNodes}
        </ul>
      </div>
    );
  }
}
