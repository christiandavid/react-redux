import axios from "axios";
import Constants from "../constants";

const addText = text => {
  const request = axios.post(process.env.REACT_APP_API_URL, {
    text
  });

  return dispatch => {
    request.then(({ data }) => {
      dispatch({
        type: Constants.ADD_TEXT,
        payload: data
      });
    });
  };
};

const removeText = id => ({
  type: Constants.REMOVE_TEXT,
  payload: id
});

export { addText, removeText };
