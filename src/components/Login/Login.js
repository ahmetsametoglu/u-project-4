import "./Login.css";
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import LoginUserItem from "./LoginUserItem/LoginUserItem";
import NewUser from "../NewUser/NewUser";

const Login = ({ users, login }) => {
  const [showNewUserModal, setShowNewUserModal] = useState(false);
  return (
    <Fragment>
      <div className="login-title">
        Select a user to login:
        <button
          className="btn-create-user"
          onClick={() => {
            setShowNewUserModal(true);
          }}
        >
          create user
        </button>
      </div>
      <div className="login-user-container">
        {users.map(u => (
          <LoginUserItem key={u.id} user={u} login={login} />
        ))}
      </div>

      <NewUser
        show={showNewUserModal}
        onClose={() => setShowNewUserModal(false)}
      />
    </Fragment>
  );
};

Login.prototype = {
  users: PropTypes.array.isRequired,
  login: PropTypes.func.isRequired
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
