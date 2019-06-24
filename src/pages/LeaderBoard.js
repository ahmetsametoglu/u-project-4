import React from "react";
import { connect } from "react-redux";

const LeaderBoard = () => {
  return <div className="leader-board-page">TODO: Leader Board Page</div>;
};

const mapStateToProps = ({ users }) => {
  return {
    users
  };
};

export default connect(mapStateToProps)(LeaderBoard);
