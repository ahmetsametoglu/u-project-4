import * as actionTypes from "./actionTypes";
import { saveQuestionAnswer, saveQuestion } from "../../api";
import { showLoading, hideLoading } from "react-redux-loading";

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
    dispatch(showLoading());
    const state = getState();
    return saveQuestionAnswer(state.auth.userId, questionId, answer)
      .then(_ => {
        dispatch(setAnswerToQuestion(questionId, answer, state.auth.userId));
      })
      .then(() => dispatch(hideLoading()));
  };
};

export const handleSaveQuestion = (optionOneText, optionTwoText) => {
  return (dispatch, getState) => {
    dispatch(showLoading());
    const state = getState();
    return saveQuestion(optionOneText, optionTwoText, state.auth.userId)
      .then(question => {
        dispatch({
          type: actionTypes.SAVE_QUESTION,
          question
        });
      })
      .then(() => dispatch(hideLoading()));
  };
};
