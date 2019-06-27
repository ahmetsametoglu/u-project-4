import * as actionTypes from "../actions/actionTypes";

export const questions = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.RECEIVE_QUESTIONS:
      return { ...state, ...action.questions };

    case actionTypes.SET_ANSWER_TO_QUESTION:
      return setAnswerToQuestion(state, action);

    case actionTypes.SAVE_QUESTION:
      return saveQuestion(state, action);

    default:
      return state;
  }
};

const setAnswerToQuestion = (state, action) => {
  const { questionId, answer, authUserId } = action;
  const question = state[questionId];

  const questions = {
    ...state,
    [questionId]: {
      ...question,
      [answer]: {
        ...question[answer],
        votes: [...question[answer].votes, authUserId]
      }
    }
  };

  return {
    ...state,
    ...questions
  };
};

const saveQuestion = (state, action) => {
  const { question } = action;
  const questions = {
    ...state,
    [question.id]: question
  };

  return {
    ...state,
    ...questions
  };
};
