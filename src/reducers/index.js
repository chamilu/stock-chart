import { combineReducers } from "redux";
import companyReducer from "./companyReducer";
import selectedCompanyReducer from "./selectedCompanyReducer";
import { loaderReducer } from "./loaderReducer";

const rootReducer = combineReducers({
  companyList: companyReducer,
  selectedCompany: selectedCompanyReducer,
  loader: loaderReducer
});

export default rootReducer;
