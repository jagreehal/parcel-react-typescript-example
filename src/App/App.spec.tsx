import 'jest-dom/extend-expect';
import * as React from 'react';
import {render, cleanup} from 'react-testing-library'
import App from './index';

describe('Toggled', () => {

  afterEach(cleanup);

  it('works', () => {
    const {getByTestId} = render(<App name="Jag" />);
    expect(getByTestId('app')).toHaveTextContent('Well hello there Jag :)');
  });
});
