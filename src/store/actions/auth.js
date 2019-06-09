import * as actonTypes from "./actionTypes";

export const setAuthUser = id => {
  return {
    type: actonTypes.SET_AUTH_USER,
    id
  };
};
