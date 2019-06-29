import "./NavigationItems.css";

import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
  return (
    <ul className="navigation-items">
      <NavigationItem link="/" exact>
        Home
      </NavigationItem>
      <NavigationItem link="/add">New Question</NavigationItem>
      <NavigationItem link="/leaderboard">Leader Board</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
