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
  );
};

const mapStateToProps = ({ questions, users, auth }) => {
  const currentUser = users[auth.userId];
  console.log(Object.values(questions));
  const answeredQuestionIds = Object.keys(currentUser.answers).reverse();

  const orderedUnansweredQuestions = Object.values(questions)
    .filter(q => answeredQuestionIds.indexOf(q.id) === -1)
    .sort((q1, q2) => (q1.timestamp - q2.timestamp > 0 ? -1 : 1));

  const unAnsweredQuestionIds = orderedUnansweredQuestions.map(q => q.id);

  return {
    questions,
    users,
    answeredQuestionIds: answeredQuestionIds,
    unAnsweredQuestionIds: unAnsweredQuestionIds
  };
};

export default connect(mapStateToProps)(QuestionList);
