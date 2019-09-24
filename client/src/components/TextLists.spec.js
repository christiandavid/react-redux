import React from 'react';
import { shallow, mount } from 'enzyme';
import TextLists from './TextLists';

const setup = ({ text }, fn, tag) => {
  const component = fn(
    <TextLists text={text} />,
  );

  return {
    component,
    wrapper: component.find(tag),
  };
};

describe('TextLists component', () => {
  it('Should render "Please add a text"', () => {
    const { wrapper } = setup({ text: [] }, shallow, 'h4');
    expect(wrapper.text()).toMatch(/^Please add a text$/);
  });

  it('Should render two cards "First Text, Second Text"', () => {
    const { wrapper } = setup({ text: [{ text: 'First Text' }, { text: 'Second Text' }] }, mount, 'h4');
    expect(wrapper.length).toBe(2);
    const texts = wrapper.map((node) => node.text());
    expect(texts).toEqual(expect.arrayContaining(['First Text', 'Second Text']));
  });
});
