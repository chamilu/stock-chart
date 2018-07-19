import { combineReducers } from "redux";
import stockReducer from "./stockReducer";
import companyReducer from "./companyReducer";
import selectedCompanyReducer from "./selectedCompanyReducer";

const rootReducer = combineReducers({
  stocks: stockReducer,
  companyList: companyReducer,
  selectedCompany: selectedCompanyReducer
});

export default rootReducer;
