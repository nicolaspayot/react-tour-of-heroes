import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import { Hello } from './hello';

describe('hello component', function() {
  it('should render "Hello, Tour of Heroes!"', function() {
    var hello = TestUtils.renderIntoDocument(<Hello/>);
    var h1 = TestUtils.findRenderedDOMComponentWithTag(hello, 'h1');
    expect(h1.textContent).toEqual('Hello, Tour of Heroes!');
  });
});
