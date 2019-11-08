import { combineReducers } from "redux";
import Constants from "../constants";

const text = (state = [], action) => {
  switch (action.type) {
    case Constants.ADD_TEXT:
      return [...state, action.payload];

    case Constants.REMOVE_TEXT:
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
};

export default combineReducers({
  text
});
