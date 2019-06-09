import * as actions from "./index";

const default_auth_user = "tylermcginnis";

export const handleInitialData = () => {
  return dispatch => {
    dispatch(actions.setAuthUser(default_auth_user));
  };
};
