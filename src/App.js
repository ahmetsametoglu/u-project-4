import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";
import NewQuestion from "./pages/NewQuestion";
import Question from "./pages/Question";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import * as actions from "./store/actions";
import LoadingBar from "react-redux-loading";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    let pages = null;

    if (this.props.isAuth) {
      pages = (
        <div className="page-container">
          <Route path="/add" component={NewQuestion} />
          <Route path="/questions/:id" component={Question} />
          <Route path="/leaderboard" component={LeaderBoard} />
          <Route path="/" exact component={Home} />
        </div>
      );
    } else {
      pages = (
        <div className="page-container">
          <Login />
        </div>
      );
    }
    return (
      <BrowserRouter>
        <LoadingBar />
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
