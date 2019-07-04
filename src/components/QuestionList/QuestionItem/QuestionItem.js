import "./QuestionItem.css";

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const QuestionItem = ({ question, owner }) => {
  return (
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
        <div className="question-detail">
          <div className="would-you-rather">Would you rather ?</div>
          <div className="tip">... {question.optionOne.text}...</div>
          <Link to={`/questions/${question.id}`} className="view-button">
            View Poll
          </Link>
        </div>
      </div>
    </div>
  );
};

QuestionItem.propTypes = {
  question: PropTypes.object.isRequired,
  owner: PropTypes.object.isRequired
};
export default QuestionItem;
