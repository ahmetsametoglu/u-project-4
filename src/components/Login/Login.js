import "./login.css";
import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

const Login = () => {
  return <div>Login Page</div>;
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: userId => dispatch(actions.setAuthUser(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
