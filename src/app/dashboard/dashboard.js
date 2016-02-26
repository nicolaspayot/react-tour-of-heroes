import React, { Component } from 'react';
import './dashboard.scss';

export class Dashboard extends Component {
  render() {
    const topHeroes = (this.props.data || []).slice(1, 5);
    const topHeroNodes = topHeroes.map(hero => {
      return (
        <div className="col-1-4" key={hero.id}>
          <div className="module">
            <h4>{hero.name}</h4>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h3>Top Heroes</h3>
        <div className="grid grid-pad">
          {topHeroNodes}
        </div>
      </div>
    );
  }
}
