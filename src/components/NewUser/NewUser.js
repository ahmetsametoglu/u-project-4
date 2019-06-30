import "./NewUser.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../UI/Modal/Modal";

const NewUser = props => {
  return (
    <Modal show={props.show} modalClosed={props.onClose}>
      <div>new user</div>
    </Modal>
  );
};

NewUser.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default NewUser;
