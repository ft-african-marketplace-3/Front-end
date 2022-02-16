import { combineReducers } from "redux";
import isLoggedReducer from "./User";
import dataLoadReducer from "./Data";
import homeButtonReducer from "./HomButton";

export default combineReducers({
  isLoggedReducer,
  homeButtonReducer,
  dataLoad: dataLoadReducer,
});
