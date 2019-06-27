import React from "react";
import NewQuestionForm from "../components/NewQuestionForm/NewQuestionForm";
import { connect } from "react-redux";

import * as actions from "../store/actions";

const NewQuestion = props => {
  console.log(props);

  const saveQuestion = (optionOne, optionTwo) => {
    props.saveQuestion(optionOne, optionTwo).then(_ => {
      props.history.replace("/");
    });
  };
  return <NewQuestionForm saveQuestion={saveQuestion} />;
};

const mapDispatchToProps = dispatch => {
  return {
    saveQuestion: (optionOne, optionTwo) =>
      dispatch(actions.handleSaveQuestion(optionOne, optionTwo))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewQuestion);
