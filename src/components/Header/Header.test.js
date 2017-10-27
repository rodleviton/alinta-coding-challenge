import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Header from './';

describe('Header Component', () => {
  it('should render correctly', () => {
    const tree = ReactTestRenderer.create(
      <Header />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
