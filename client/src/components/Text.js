import React from "react";
import PropTypes from "prop-types";

const Text = ({ text, onClick }) => (
  <div className="card mb-4 shadow-sm">
    <div className="card-body">
      <button
        type="button"
        onClick={onClick}
        className="close"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <h4 className="my-0 font-weight-normal">{text}</h4>
    </div>
  </div>
);

Text.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Text;
