import React, { Component } from 'react';
import './heroes.scss';

export class Heroes extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onSelect(selectedHero) {
    this.setState({ selectedHero });
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
          <button>View Details</button>
        </div>
      );
    }

    return (
      <div>
        <h2>My heroes</h2>
        <ul className="heroes">
          {heroNodes}
        </ul>
        {selectedHeroNode}
      </div>
    );
  }
}
