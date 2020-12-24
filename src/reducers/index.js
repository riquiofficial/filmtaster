import { combineReducers } from "redux";
import filmReducer from "./filmReducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
  films: filmReducer,
  details: detailReducer,
});

export default rootReducer;
