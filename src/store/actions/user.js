import * as actonTypes from "./actionTypes";

export const receiveUsers = users => {
  return {
    type: actonTypes.RECEIVE_USERS,
    users
  };
};
