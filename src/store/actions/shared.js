import * as actions from "./index";
import * as api from "../../api";
import { showLoading, hideLoading } from "react-redux-loading";

const default_auth_user = null;

export const handleInitialData = () => {
  return dispatch => {
    dispatch(showLoading());
    return api.getInitialData().then(({ users, questions }) => {
      dispatch(actions.receiveUsers(users));
      dispatch(actions.receiveQuestions(questions));
      dispatch(actions.setAuthUser(default_auth_user));
      dispatch(hideLoading());
    });
  };
};
