import "./QuestionList.css";
import React, { useState } from "react";
import { connect } from "react-redux";
import QuestionItem from "./QuestionItem/QuestionItem";

const QuestionList = ({
  unAnsweredQuestionIds,
  answeredQuestionIds,
  questions,
  users
}) => {
  const [selectedType, setSelectedType] = useState("unanswered");

  const questionIds =
    selectedType === "answered" ? answeredQuestionIds : unAnsweredQuestionIds;
  const listDom = questionIds.map(id => (
    <QuestionItem
      key={id}
      question={questions[id]}
      owner={users[questions[id].author]}
    />
  ));
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

  const answeredQuestionIds = Object.keys(currentUser.answers);
  const unAnsweredQuestionIds = Object.keys(questions).filter(
    q => answeredQuestionIds.indexOf(q) === -1
  );

  return {
    questions,
    users,
    answeredQuestionIds: answeredQuestionIds,
    unAnsweredQuestionIds: unAnsweredQuestionIds
  };
};

export default connect(mapStateToProps)(QuestionList);
