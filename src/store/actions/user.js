import * as actionTypes from "./actionTypes";
import { createUser } from "../../api";
import { hideLoading, showLoading } from "react-redux-loading";

export const receiveUsers = users => {
  return {
    type: actionTypes.RECEIVE_USERS,
    users
  };
};

export const handleCreateUser = (name, avatarURL) => {
  return dispatch => {
    dispatch(showLoading());
    return createUser(name, avatarURL)
      .then(user => {
        dispatch({
          type: actionTypes.CREATE_USER,
          user
        });
      })
      .then(() => dispatch(hideLoading()))
      .catch(err => {
        dispatch(hideLoading());
        throw err;
      });
  };
};
