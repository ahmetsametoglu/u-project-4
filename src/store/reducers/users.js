import * as actionTypes from "../actions/actionTypes";

export const users = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.RECEIVE_USERS:
      return { ...state, ...action.users };
    case actionTypes.SET_ANSWER_TO_QUESTION:
      return setAnswerToQuestion(state, action);
    case actionTypes.SAVE_QUESTION:
      return saveQuestion(state, action);
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

const saveQuestion = (state, action) => {
  const authedUser = action.question.author;
  const questionId = action.question.id;

  const users = {
    ...state,
    [authedUser]: {
      ...state[authedUser],
      questions: state[authedUser].questions.concat([questionId])
    }
  };
  return {
    ...state,
    ...users
  };
};
