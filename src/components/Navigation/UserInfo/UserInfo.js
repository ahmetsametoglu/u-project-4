import "./UserInfo.css";
import React, { Component } from "react";
import { connect } from "react-redux";

class UserInfo extends Component {
  render() {
    const { user } = this.props;
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
        </div>
      );
    }
    return userInfo;
  }
}

const mapStateToProps = state => {
  const loginUser =
    !!state.users && !!state.auth.userId
      ? state.users[state.auth.userId]
      : null;
  console.log("loginUser:", loginUser);

  return {
    user: loginUser
  };
};

export default connect(mapStateToProps)(UserInfo);
