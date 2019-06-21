import * as actionTypes from "./actionTypes";
import { saveQuestionAnswer } from "../../api";

export const receiveQuestions = questions => {
  return {
    type: actionTypes.RECEIVE_QUESTIONS,
    questions
  };
};

const setAnswerToQuestion = (questionId, answer, authUserId) => {
  return {
    type: actionTypes.SET_ANSWER_TO_QUESTION,
    questionId,
    answer,
    authUserId
  };
};

export const handleSetAnswerToQuestion = (questionId, answer) => {
  return (dispatch, getState) => {
    const state = getState();
    return saveQuestionAnswer(state.auth.userId, questionId, answer).then(_ => {
      dispatch(setAnswerToQuestion(questionId, answer, state.auth.userId));
    });
  };
};
