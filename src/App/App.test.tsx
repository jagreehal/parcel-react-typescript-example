import React from 'react';

import { render } from 'react-testing-library';

import App from './index';

describe('example test', () => {
  it('that passes', () => {
    const { container } = render(<App />);
    expect(container.firstChild && container.firstChild.textContent).toEqual(
      'Hello'
    );
  });
});
