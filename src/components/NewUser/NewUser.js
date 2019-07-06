import "./NewUser.css";
import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Modal from "../UI/Modal/Modal";
import * as actions from "../../store/actions";

const NewUser = props => {
  const [userName, setUserName] = useState("");
  const [validationError, setValidationError] = useState("");
  const [avatarURL, setAvatarURL] = useState("/assets/avatar-icons/1.png");

  let avatars = [];

  for (let index = 1; index < 16; index++) {
    const avatarPath = `/assets/avatar-icons/${index}.png`;
    const avatarImg = (
      <img
        key={index}
        className="avatar-list-item"
        src={avatarPath}
        alt={index}
        onClick={() => {
          setAvatarURL(avatarPath);
        }}
      />
    );

    avatars.push(avatarImg);
  }

  const isButtonDisable = () => {
    return userName === "";
  };

  const createUser = () => {
    props
      .createUser(userName, avatarURL)
      .then(() => {
        setUserName("");
        setValidationError("");
        props.onClose();
      })
      .catch(err => {
        setValidationError("* " + String(err.message));
      });
  };

  return (
    <Modal show={props.show} modalClosed={props.onClose}>
      <div className="new-user-container">
        <div className="avatar-list">{avatars}</div>
        <img className="avatar" src={avatarURL} alt={`Avatar of new user`} />
        <input
          placeholder="Enter Full Name"
          className="new-user-name"
          value={userName}
          onChange={event => {
            setUserName(event.target.value);
            setValidationError("");
          }}
        />
        {validationError !== "" && (
          <div className="validation-error">{validationError}</div>
        )}

        <button
          className="new-user-button"
          disabled={isButtonDisable()}
          onClick={createUser}
        >
          Create User
        </button>
      </div>
    </Modal>
  );
};

NewUser.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    createUser: (name, avatarPath) =>
      dispatch(actions.handleCreateUser(name, avatarPath))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewUser);
