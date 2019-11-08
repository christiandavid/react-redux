import React from "react";
import PropTypes from "prop-types";
import Text from "./Text";
import "./TextLists.css";

const TextList = ({ text, onRemoveClick }) => {
  const hasText = text.length > 0;
  const list = hasText ? (
    text.map(item => (
      <Text key={item.id} {...item} onClick={() => onRemoveClick(item.id)} />
    ))
  ) : (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h4 className="my-0 font-weight-normal">Please add a text</h4>
      </div>
    </div>
  );

  return <div className="mb-3 text-center mt-4 card-columns">{list}</div>;
};

TextList.propTypes = {
  text: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onRemoveClick: PropTypes.func.isRequired
};

export default TextList;
