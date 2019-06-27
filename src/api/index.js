import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion
} from "./_DATA";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions
    })
  );
}

export function saveQuestionAnswer(authUserId, questionId, answer) {
  console.log(authUserId, questionId, answer);

  return _saveQuestionAnswer({
    authedUser: authUserId,
    qid: questionId,
    answer
  });
}

export function saveQuestion(optionOneText, optionTwoText, author) {
  return _saveQuestion({ optionOneText, optionTwoText, author });
}
