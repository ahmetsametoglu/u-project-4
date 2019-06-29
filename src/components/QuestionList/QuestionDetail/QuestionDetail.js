import "./QuestionDetail.css";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import AnsweredQuestion from "./AnsweredQuestion/AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion/UnansweredQuestion";
import * as actions from "../../../store/actions";

const QuestionDetail = ({ question, owner, answer, setAnswer }) => {
  const onHandleAnswer = answer => {
    if (!!answer && answer !== "") {
      setAnswer(question.id, answer);
    }
  };

  const pollNotExist = (
    <div className="poll-not-exist">
      <span> 404</span> <br />
      poll not exist
    </div>
  );

  return (
    <Fragment>
      {!question ? (
        pollNotExist
      ) : (
        <div>
          <div className="who-ask">{owner.name} asks:</div>
          <div className="question">
            <div className="owner-avatar">
              <img
                className="avatar"
                src={owner.avatarURL}
                alt={`Avatar of ${owner.name}`}
              />
            </div>
            <div className="question-action">
              {!!answer ? (
                <AnsweredQuestion question={question} answer={answer} />
              ) : (
                <UnansweredQuestion
                  question={question}
                  handleAnswer={onHandleAnswer}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ questions, users, auth }, { id }) => {
  const authUserAnswers = users[auth.userId].answers;
  const result = !!questions[id]
    ? {
        question: questions[id],
        owner: users[questions[id].author],
        answer: authUserAnswers[id]
      }
    : {};
  return result;
};

const mapDispatchToProps = dispatch => {
  return {
    setAnswer: (questionId, answer) =>
      dispatch(actions.handleSetAnswerToQuestion(questionId, answer))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionDetail);
