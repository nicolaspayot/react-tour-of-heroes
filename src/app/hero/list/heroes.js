import React, { Component } from 'react';
import { hashHistory } from 'react-router';

import './heroes.scss';

export class Heroes extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onSelect(selectedHero) {
    this.setState({ selectedHero });
  }

  gotoDetail() {
    const heroId = this.state.selectedHero.id;
    hashHistory.push(`/heroes/${heroId}`);
  }

  render() {
    const heroes = this.props.data;
    const heroNodes = heroes.map(hero => {
      return (
        <li
          key={hero.id}
          className={this.state.selectedHero === hero ? 'selected' : null }
          onClick={() => this.onSelect(hero)}>
          <span className="badge">{hero.id}</span> {hero.name}
        </li>
      );
    });

    let selectedHeroNode;
    if (this.state.selectedHero) {
      selectedHeroNode = (
        <div>
          <h2>{this.state.selectedHero.name.toUpperCase()} is my hero</h2>
          <button onClick={() => this.gotoDetail()}>View Details</button>
        </div>
      );
    }

    const style = { marginTop: '20px' };
    return (
      <div style={style}>
        <h2>My heroes</h2>
        <ul className="heroes">
          {heroNodes}
        </ul>
        {selectedHeroNode}
      </div>
    );
  }
}
