import "./UserInfo.css";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Logout from "../Logout/Logout";

const UserInfo = ({ user }) => {
  let userInfo = null;
  if (user) {
    userInfo = (
      <div className="user-info">
        <span>{user.name}</span>
        <img
          className="avatar"
          src={user.avatarURL}
          alt={`Avatar of ${user.name}`}
        />
        <Logout />
      </div>
    );
  }
  return userInfo;
};

UserInfo.prototype = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const loginUser =
    !!state.users && !!state.auth.userId
      ? state.users[state.auth.userId]
      : null;

  return {
    user: loginUser
  };
};

export default connect(mapStateToProps)(UserInfo);
