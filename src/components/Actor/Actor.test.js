import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Movie from './';

describe('Actor Component', () => {
  it('should render correctly', () => {
    const props = {
      name: 'Richard Dreyfuss',
      roles:[
        {
          name: 'The Writer',
          actor: 'Richard Dreyfuss',
          movie: 'Stand By Me'
        }
      ]
    };

    const tree = ReactTestRenderer.create(
      <Movie actor={props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
