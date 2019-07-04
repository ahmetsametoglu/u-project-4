import "./AnsweredQuestion.css";
import React from "react";
import PropTypes from "prop-types";
import OptionItem from "./OptionItem/OptionItem";

const AnsweredQuestion = ({ question, answer }) => {
  const optionOneVoteCount = question.optionOne.votes.length;
  const optionTwoVoteCount = question.optionTwo.votes.length;
  const totalVoteCount = optionOneVoteCount + optionTwoVoteCount;

  return (
    <div>
      <div className="question-header">Results:</div>

      <OptionItem
        text={question.optionOne.text}
        optionVoteCount={optionOneVoteCount}
        totalVoteCount={totalVoteCount}
        thisOptionSelected={answer === "optionOne"}
      />
      <OptionItem
        text={question.optionTwo.text}
        optionVoteCount={optionTwoVoteCount}
        totalVoteCount={totalVoteCount}
        thisOptionSelected={answer === "optionTwo"}
      />
    </div>
  );
};

AnsweredQuestion.prototype = {
  question: PropTypes.object.isRequired,
  answer: PropTypes.object.isRequired
};

export default AnsweredQuestion;
