import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";
import NewQuestion from "./pages/NewQuestion";
import { connect } from "react-redux";
import * as actions from "./store/actions";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route path="/new-question" component={NewQuestion} />
          <Route path="/leader-board" component={LeaderBoard} />
          <Route path="/" exact component={Home} />
        </Layout>
      </BrowserRouter>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleInitialData: () => dispatch(actions.handleInitialData())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(App);
