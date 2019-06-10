import "./Logout.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";

class Logout extends Component {
  render() {
    return <button className='logout-button' onClick={this.props.logout}>logout</button>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.setAuthUser(null))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Logout);
