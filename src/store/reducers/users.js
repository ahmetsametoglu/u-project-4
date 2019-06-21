import * as actionTypes from "../actions/actionTypes";

export const users = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.RECEIVE_USERS:
      return { ...state, ...action.users };
    case actionTypes.SET_ANSWER_TO_QUESTION:
      return setAnswerToQuestion(state, action);
    default:
      return state;
  }
};

const setAnswerToQuestion = (state, action) => {
  const users = {
    ...state,
    [action.authUserId]: {
      ...state[action.authUserId],
      answers: {
        ...state[action.authUserId].answers,
        [action.questionId]: action.answer
      }
    }
  };

  return {
    ...state,
    ...users
  };
};
