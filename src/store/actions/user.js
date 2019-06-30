import * as actionTypes from "./actionTypes";
import { createUser } from "../../api";

export const receiveUsers = users => {
  return {
    type: actionTypes.RECEIVE_USERS,
    users
  };
};

export const handleCreateUser = (name, avatarURL) => {
  return dispatch => {
    return createUser(name, avatarURL).then(user => {
      dispatch({
        type: actionTypes.CREATE_USER,
        user
      });
    });
  };
};
