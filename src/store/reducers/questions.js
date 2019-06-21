import * as actionTypes from "../actions/actionTypes";

export const questions = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.RECEIVE_QUESTIONS:
      return { ...state, ...action.questions };

    case actionTypes.SET_ANSWER_TO_QUESTION:
      console.log("reducer QUESTION state", state);
      return setAnswerToQuestion(state, action);
    default:
      return state;
  }
};

const setAnswerToQuestion = (state, action) => {
  const { questionId, answer, authUserId } = action;
  console.log("question=>", questionId, answer, authUserId);
  const question = state[questionId];
  console.log("question=>", question);

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
