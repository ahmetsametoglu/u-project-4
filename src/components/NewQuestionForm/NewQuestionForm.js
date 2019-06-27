import "./NewQuestionForm.css";

import React, { useState } from "react";

function NewQuestionForm() {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    //TODO: submit new question
  };
  const isButtonDisable = () => {
    return optionOne.trim() === "" || optionTwo.trim() === "";
  };

  return (
    <div>
      <div className="question-form-header">Create New Question</div>
      <div className="question-form-description">Complete the question:</div>
      <div className="question-form-title">Would you rather ...</div>
      <form className="question-form" onSubmit={handleSubmit}>
        <input
          placeholder="Enter Option One Text Here"
          className="question-form-option"
          value={optionOne}
          onChange={event => {
            setOptionOne(event.target.value);
          }}
        />
        <div className="question-option-separate">
          <hr className="option-separate-hr" />
          <span className="option-separate-span"> OR </span>
        </div>
        <input
          placeholder="Enter Option Two Text Here"
          className="question-form-option"
          value={optionTwo}
          onChange={event => {
            setOptionTwo(event.target.value);
          }}
        />
        <button
          className="new-question-button"
          type="submit"
          disabled={isButtonDisable()}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewQuestionForm;
