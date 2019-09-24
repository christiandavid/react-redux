import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ text }) => (
  <div className="card mb-4 shadow-sm">
    <div className="card-body">
      <h4 className="my-0 font-weight-normal">{text}</h4>
    </div>
  </div>
);

Text.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Text;
