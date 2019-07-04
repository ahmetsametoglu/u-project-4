import "./UnansweredQuestion.css";
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

function UnansweredQuestion({ question, handleAnswer }) {
  const [answer, setAnswer] = useState("");

  const handleOptionChange = event => {
    console.log(event.target.value);
    if (event.target.value.trim() !== "") {
      setAnswer(event.target.value);
    }
  };
  return (
    <Fragment>
      <div className="question-header">Would You Rather...</div>
      <form>
        <div className="form-option">
          <label>
            <input
              type="radio"
              name="optionOne"
              value="optionOne"
              checked={answer === "optionOne"}
              className="form-option-input"
              onChange={handleOptionChange}
            />
            {question.optionOne.text}
          </label>
        </div>
        <div className="form-option">
          <label>
            <input
              type="radio"
              name="optionTwo"
              value="optionTwo"
              checked={answer === "optionTwo"}
              className="form-option-input"
              onChange={handleOptionChange}
            />
            {question.optionTwo.text}
          </label>
        </div>
        <div className="view-button" onClick={() => handleAnswer(answer)}>
          Submit
        </div>
      </form>
    </Fragment>
  );
}

UnansweredQuestion.prototype = {
  question: PropTypes.object.isRequired,
  handleAnswer: PropTypes.func.isRequired
};

export default UnansweredQuestion;
