import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ text }) => (
  <li>
    {text}
  </li>
);

Text.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Text;
