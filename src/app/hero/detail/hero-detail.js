import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { hero } from '../hero';

import './hero-detail.scss';

export class HeroDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const heroId = parseInt(this.props.params.id);
    hero.get(heroId).then(data => this.setState({ hero: data }));
  }

  render() {
    const _hero = this.state.hero;
    const style = { marginTop: '20px' };

    if (typeof _hero !== 'undefined') {
      return (
        <div style={style}>
          <h2>{_hero.name} details!</h2>
          <div><label>id: </label>{_hero.id}</div>
          <div>
            <label>name: </label>
            <div><input placeholder="name" value={_hero.name}/></div>
          </div>
          <button onClick={() => hashHistory.goBack()}>Back</button>
        </div>
      );
    }
    return (<div style={style}><h2>Hero Not Found!</h2></div>);
  }
}
