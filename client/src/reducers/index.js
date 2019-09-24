
import { combineReducers } from 'redux';
import Constants from '../constants';

const text = (state = [], action) => (action.type === Constants.ADD_TEXT
  ? [
    ...state,
    action.payload,
  ]
  : state);

export default combineReducers({
  text,
});
