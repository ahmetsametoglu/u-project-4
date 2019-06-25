import React from "react";
import { connect } from "react-redux";
import LeaderBoardItem from "../components/LeaderBoard/LeaderBoardItem/LeaderBoardItem";

const LeaderBoard = ({ users }) => {
  return users.map(user => <LeaderBoardItem key={user.id} user={user} />);
};

const mapStateToProps = ({ users }) => {
  const usersWithScore = Object.values(users).map(u => {
    const score = Object.keys(u.answers).length + u.questions.length;
    return { ...u, score: score };
  });
  const orderedUsers = usersWithScore
    .sort((a, b) => (a.score > b.score ? -1 : 1))
    .map((u, index) => {
      return { ...u, orderNumber: index + 1 };
    });

  console.log(orderedUsers);

  return {
    users: orderedUsers
  };
};

export default connect(mapStateToProps)(LeaderBoard);
