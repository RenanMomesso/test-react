import { combineReducers } from "redux";
import appData from "./AppReducer";

const reducersCombine = combineReducers({
  appData,
});

export default reducersCombine;
