// ------------ //
//   REDUCERS   //
// ------------ //
import { combineReducers } from "redux";
import loggedReducer from "./isLoggedIn.js";

const allReducers = combineReducers({
  isLoggedIn: loggedReducer,
});

export default allReducers;
