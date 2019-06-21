import "./OptionItem.css";

import React from "react";

const OptionItem = props => {
  return (
    <div className="option-item-container">
      <div className="option-text">{props.text} </div>
      <div className="option-progress-bar">
        %{(props.optionVoteCount * 100) / props.totalVoteCount}
      </div>
      <div className="option-summary">
        {`${props.optionVoteCount} out of ${props.totalVoteCount}`}
      </div>
    </div>
  );
};

export default OptionItem;
