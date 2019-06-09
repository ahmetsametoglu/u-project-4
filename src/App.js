import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";
import NewQuestion from "./pages/NewQuestion";

function App() {
  return (
    <div>
      <Layout>
        <Route path="/new-question" component={NewQuestion} />
        <Route path="/leader-board" component={LeaderBoard} />
        <Route path="/" exact component={Home} />
      </Layout>
    </div>
  );
}

export default App;
