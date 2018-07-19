import { combineReducers } from "redux";
import stockReducer from "./stockReducer";
import companyReducer from "./companyReducer";

const rootReducer = combineReducers({
  stocks: stockReducer,
  companyList: companyReducer
});

export default rootReducer;
