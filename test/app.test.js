/* eslint-disable no-undef */
import React from 'react';
import App from '../src/components/app';
import { mount } from 'enzyme';

test('welcomes the user to React', function() {
  const wrapper = mount(<App />);

  expect(wrapper.text()).toContain('Hello React!');
});