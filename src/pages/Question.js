import React from "react";
import QuestionDetail from "./../components/QuestionList/QuestionDetail/QuestionDetail";

const Home = props => {
  return <QuestionDetail id={props.match.params.id} />;
};

export default Home;
