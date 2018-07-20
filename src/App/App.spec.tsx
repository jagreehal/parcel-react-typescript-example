import * as React from 'react';
import { mount } from '../../test';
import App from './index';

describe('Toggled', () => {
  it('works', () => {
    const wrapper = mount(<App name="Jag" />);
    expect(wrapper).toBeDefined();
  });
});
