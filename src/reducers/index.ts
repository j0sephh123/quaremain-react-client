import { combineReducers } from "redux";
import { state } from "./state";
import { sidebar } from "./sidebar"


export default combineReducers({
  state,
  sidebar,
});
