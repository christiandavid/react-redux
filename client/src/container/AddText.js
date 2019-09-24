import React from 'react';
import { connect } from 'react-redux';
import addText from '../actions';

const AddText = ({ dispatch }) => {
  let input;

  const submit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    dispatch(addText(input.value));
    input.value = '';
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input ref={(node) => input = node} />
        <button type="submit">
          Add text
        </button>
      </form>
    </div>
  );
};

export default connect()(AddText);
