import * as actionTypes from "../actions/actionTypes";

export const users = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.RECEIVE_USERS:
      return { ...state, ...action.questions };
    default:
      return state;
  }
};
