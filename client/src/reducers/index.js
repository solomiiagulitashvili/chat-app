import { combineReducers } from "redux";
import generalReducer from "./generalReducer";
import roomsList from "./roomsList";

const rootReducer = combineReducers({
  general: generalReducer,
  rooms: roomsList
});

export default rootReducer;
