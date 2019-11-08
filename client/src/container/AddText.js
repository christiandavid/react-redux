import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addText } from "../actions";

export const AddText = ({ dispatch }) => {
  let input;

  const submit = e => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    dispatch(addText(input.value));
    input.value = "";
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div className="input-group">
          <input
            ref={node => (input = node)}
            placeholder="Text"
            className="form-control"
            required
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">
              Add text
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

AddText.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(AddText);
