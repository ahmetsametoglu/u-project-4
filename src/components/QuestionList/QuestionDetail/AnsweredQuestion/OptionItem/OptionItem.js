import "./OptionItem.css";
import { ProgressBar } from "react-bootstrap";

import React from "react";
import PropTypes from "prop-types";

const OptionItem = props => {
  const percentage =
    Math.round((1000 * props.optionVoteCount) / props.totalVoteCount) / 10;
  const selectionContainer = (
    <div className="selection-container">
      <div className="your-vote">Your Vote</div>
    </div>
  );
  return (
    <div className="option-item-container">
      <div className="option-text">{props.text} </div>
      <ProgressBar
        className="option-progress-bar"
        now={percentage}
        label={`${percentage}%`}
      />
      <div className="option-summary">
        {`${props.optionVoteCount} out of ${props.totalVoteCount}`}
      </div>
      {props.thisOptionSelected && selectionContainer}
    </div>
  );
};

OptionItem.prototype = {
  optionVoteCount: PropTypes.number.isRequired,
  totalVoteCount: PropTypes.number.isRequired
};

export default OptionItem;
