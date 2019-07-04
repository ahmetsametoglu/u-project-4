import "./Logout.css";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";

const Logout = props => {
  return (
    <button className="logout-button" onClick={props.logout}>
      logout
    </button>
  );
};

Logout.prototype = {
  logout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.setAuthUser(null))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Logout);
