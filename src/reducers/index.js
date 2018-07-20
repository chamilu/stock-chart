import { combineReducers } from "redux";
import companyReducer from "./companyReducer";
import selectedCompanyReducer from "./selectedCompanyReducer";

const rootReducer = combineReducers({
  companyList: companyReducer,
  selectedCompany: selectedCompanyReducer
});

export default rootReducer;
