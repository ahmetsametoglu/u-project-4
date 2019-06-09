import * as actionTypes from "../actions/actionTypes";

export const auth = (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_AUTH_USER:
      return { ...state, userId: action.id };
    default:
      return state;
  }
};
