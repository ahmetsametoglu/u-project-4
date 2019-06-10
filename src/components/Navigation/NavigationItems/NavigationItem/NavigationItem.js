import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./NavigationItem.css";
import { connect } from "react-redux";

class NavigationItem extends Component {
  render() {
    return (
      <li className="navigation-item">
        <NavLink
          to={this.props.link}
          exact={this.props.exact}
          activeClassName={this.props.isLogin ? "active" : null}
        >
          {this.props.children}
        </NavLink>
      </li>
    );
  }
}

const mapToProps = store => {
  return {
    isLogin: !!store.auth.userId
  };
};

export default connect(mapToProps)(NavigationItem);
