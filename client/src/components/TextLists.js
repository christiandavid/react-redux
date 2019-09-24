import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';

const TextList = ({ text }) => {
  const hasText = text.length > 0;
  const list = hasText ? (
    text.map((item, index) => (
      <Text
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        {...item}
      />
    ))
  ) : (
    <em>Please add a text</em>
  );

  return (
    <ul>
      { list }
    </ul>
  );
};

TextList.propTypes = {
  text: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default TextList;
