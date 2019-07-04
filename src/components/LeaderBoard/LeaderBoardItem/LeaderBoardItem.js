import "./LeaderBoardItem.css";

import React from "react";
import PropTypes from "prop-types";

const LeaderBoardItem = ({ user }) => {
  return (
    <div className="leader-board-item">
      {user.orderNumber <= 3 ? (
        <div className="leader-board-badge">
          <span className="order-number"> {user.orderNumber}</span>
        </div>
      ) : null}
      <div className="avatar-container">
        <img
          className="avatar"
          src={user.avatarURL}
          alt={`Avatar of ${user.name}`}
        />
      </div>
      <div className="vertical-hr" />
      <div className="score-info">
        <div className="user-name">{user.name}</div>
        <div className="score-info-item">
          <span> Answered questions </span>
          <span> {Object.keys(user.answers).length}</span>
        </div>
        <div className="horizontal-hr" />
        <div className="score-info-item">
          <span> Created questions </span>
          <span> {user.questions.length}</span>
        </div>
      </div>
      <div className="vertical-hr" />
      <div className="score-container">
        <div className="score-header">Score</div>
        <div className="score">
          <span className="score-item">{user.score}</span>
        </div>
      </div>
    </div>
  );
};

LeaderBoardItem.prototype = {
  user: PropTypes.object.isRequired
};

export default LeaderBoardItem;
