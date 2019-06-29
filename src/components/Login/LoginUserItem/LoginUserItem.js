import "./LoginUserItem.css";

import React from "react";
import PropTypes from "prop-types";

const LoginUserItem = ({ user, login }) => {
  return (
    <div
      className="login-user-item"
      onClick={() => {
        console.log("item click");
        login(user.id);
      }}
    >
      <img
        className="login-avatar"
        src={user.avatarURL}
        alt={`Avatar of ${user.name}`}
      />
      <div className="login-user-name">{user.name}</div>
    </div>
  );
};

LoginUserItem.propTypes = {
  user: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
};
export default LoginUserItem;
