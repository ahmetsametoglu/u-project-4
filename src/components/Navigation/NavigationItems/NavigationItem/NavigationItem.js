import "./NavigationItem.css";
import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const NavigationItem = props => {
  return (
    <li className="navigation-item">
      <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName={props.isLogin ? "active" : null}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

NavigationItem.prototype = {
  link: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  isLogin: PropTypes.bool.isRequired
};

const mapToProps = store => {
  return {
    isLogin: !!store.auth.userId
  };
};

export default connect(mapToProps)(NavigationItem);
