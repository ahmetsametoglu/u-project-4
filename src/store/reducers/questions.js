import * as actionTypes from "../actions/actionTypes";

export const questions = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.RECEIVE_QUESTIONS:
      return { ...state, ...action.questions };

    default:
      return state;
  }
};
