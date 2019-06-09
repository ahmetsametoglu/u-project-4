import "./NavigationItems.css";

import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
  return (
    <ul className="navigation-items">
      <NavigationItem link="/" exact>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/new-question">New Question</NavigationItem>
      <NavigationItem link="/leader-board">Leader Board</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
