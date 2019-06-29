import * as actions from "./index";
import * as api from "../../api";

const default_auth_user = null;

export const handleInitialData = () => {
  return dispatch => {
    return api.getInitialData().then(({ users, questions }) => {
      dispatch(actions.receiveUsers(users));
      dispatch(actions.receiveQuestions(questions));
      dispatch(actions.setAuthUser(default_auth_user));
    });
  };
};
