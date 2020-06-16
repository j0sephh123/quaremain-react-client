import { combineReducers } from "redux";
import { state } from "./stateR";
import { sidebar } from "./sidebarR"


export default combineReducers({
  state,
  sidebar,
});
