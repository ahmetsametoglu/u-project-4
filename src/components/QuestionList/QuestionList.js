import "./QuestionList.css";
import React, { useState } from "react";
import { connect } from "react-redux";

const QuestionList = ({ unAnsweredQuestionIds, answeredQuestionIds }) => {
  const [selectedType, setSelectedType] = useState("unanswered");

  const questionIds =
    selectedType === "answered" ? answeredQuestionIds : unAnsweredQuestionIds;
  const listDom = questionIds.map(q => <div key={q}>{q}</div>);
  const getClassName = buttonType => {
    return selectedType === buttonType
      ? "selection-button active"
      : "selection-button";
  };
  return (
    <div className="question-list-container">
      <div className="list">
        <div className="list-selection">
          <div
            className={getClassName("unanswered")}
            onClick={() => setSelectedType("unanswered")}
          >
            Unanswered Questions
          </div>
          <div
            className={getClassName("answered")}
            onClick={() => setSelectedType("answered")}
          >
            Answered Questions
          </div>
        </div>
        <div className="list-items">{listDom}</div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions, users, auth }) => {
  const currentUser = users[auth.userId];

  const answeredQuestions = Object.keys(currentUser.answers);
  const unAnsweredQuestions = Object.keys(questions).filter(
    q => answeredQuestions.indexOf(q) === -1
  );
  console.log(answeredQuestions, unAnsweredQuestions);

  return {
    answeredQuestionIds: answeredQuestions,
    unAnsweredQuestionIds: unAnsweredQuestions
  };
};

export default connect(mapStateToProps)(QuestionList);
