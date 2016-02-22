import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import { App } from './app.js';

describe('App component', function() {
  it('should render something', function() {
    var app = TestUtils.renderIntoDocument(<App title="Tour of Heroes"/>);
    var h1 = TestUtils.findRenderedDOMComponentWithTag(app, 'h1');
    expect(h1.textContent).toEqual('Tour of Heroes');
  });
});
