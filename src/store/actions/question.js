import * as actonTypes from "./actionTypes";

export const receiveQuestions = questions => {
  return {
    type: actonTypes.RECEIVE_QUESTIONS,
    questions
  };
};
