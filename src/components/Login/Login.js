import "./Login.css";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import LoginUserItem from "./LoginUserItem/LoginUserItem";

const Login = ({ users, login }) => {
  return (
    <Fragment>
      <div className="login-title">Select a user to login:</div>
      <div className="login-user-container">
        {users.map(u => (
          <LoginUserItem key={u.id} user={u} login={login} />
        ))}
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    users: Object.values(state.users)
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
