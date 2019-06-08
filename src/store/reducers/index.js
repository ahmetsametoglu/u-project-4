import { combineReducers } from "redux";
import { questions } from "./questions";
import { users } from "./users";
import { auth } from "./auth";

export default combineReducers({
  questions,
  users,
  auth
});
