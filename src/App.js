import React, { Component, Fragment } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";
import NewQuestion from "./pages/NewQuestion";
import Question from "./pages/Question";
import { connect } from "react-redux";
import * as actions from "./store/actions";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    let pages = null;

    if (this.props.isAuth) {
      pages = (
        <div className="page-container">
          <Route path="/new-question" component={NewQuestion} />
          <Route path="/question/:id" component={Question} />
          <Route path="/leader-board" component={LeaderBoard} />
          <Route path="/" exact component={Home} />
        </div>
      );
    }
    return (
      <BrowserRouter>
        <Layout>{pages}</Layout>
      </BrowserRouter>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleInitialData: () => dispatch(actions.handleInitialData())
  };
};

const mapStateToProps = ({ auth }) => {
  return {
    isAuth: !!auth.userId
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
