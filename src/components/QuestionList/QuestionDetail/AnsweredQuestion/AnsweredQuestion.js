import "./AnsweredQuestion.css";
import React from "react";
import OptionItem from "./OptionItem/OptionItem";

const AnsweredQuestion = ({ question }) => {
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
      />
      <OptionItem
        text={question.optionTwo.text}
        optionVoteCount={optionTwoVoteCount}
        totalVoteCount={totalVoteCount}
      />
    </div>
  );
};

export default AnsweredQuestion;
