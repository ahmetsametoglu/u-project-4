import "./QuestionDetail.css";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import AnsweredQuestion from "./AnsweredQuestion/AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion/UnansweredQuestion";

const QuestionDetail = ({ question, owner, answer }) => {
  const onHandleAnswer = answer => {
    if (!!answer) {
      //TODO: save answer
    }
  };
  return (
    <Fragment>
      <div className="question-detail-container">
        <div className="question-item-container">
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
                <AnsweredQuestion question={question} />
              ) : (
                <UnansweredQuestion
                  question={question}
                  handleAnswer={onHandleAnswer}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ questions, users, auth }, { id }) => {
  const authUserAnswers = users[auth.userId].answers;
  return {
    question: questions[id],
    owner: users[questions[id].author],
    answer: authUserAnswers[id]
  };
};

export default connect(mapStateToProps)(QuestionDetail);
