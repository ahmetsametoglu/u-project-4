import "./Toolbar.css";

import React from "react";
import NavigationItems from "./../NavigationItems/NavigationItems";
import UserInfo from "../UserInfo/UserInfo";

const Toolbar = () => {
  return (
    <header className="toolbar">
      <nav>
        <NavigationItems />
      </nav>
      <UserInfo />
    </header>
  );
};

export default Toolbar;
