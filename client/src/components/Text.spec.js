import React from 'react';
import { shallow } from 'enzyme';
import Text from './Text';

const setup = ({ text }) => {
  const component = shallow(
    <Text text={text} />,
  );

  return {
    component,
    h4: component.find('h4'),
  };
};

describe('Text component', () => {
  it('Should render the text', () => {
    const { h4 } = setup({ text: 'Hello World!' });
    expect(h4.text()).toMatch(/^Hello World!$/);
  });
});
