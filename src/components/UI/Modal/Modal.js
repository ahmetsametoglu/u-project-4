import "./Modal.css";

import React, { Component, Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          <div className="modal-close-button" onClick={this.props.modalClosed}>
            close
          </div>
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default Modal;
