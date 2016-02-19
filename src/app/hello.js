import React, { Component } from 'react';

export class Hello extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hello: 'Hello, Tour of Heroes!'
    }
  }

  render() {
    return (
      <h1>{ this.state.hello }</h1>
    );
  }
}
