import "./Toolbar.css";

import React from "react";
import NavigationItems from "./../NavigationItems/NavigationItems";

const Toolbar = () => {
  return (
    <header className="toolbar">
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
