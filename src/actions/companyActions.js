import axios from "axios";

const APIKEY = "T3EDDPYB5BGTQYFM";

const getCompanyList = () => {
  return {
    type: "GET_COMPANY_LIST"
  };
};

const getSelectedCompany = company => {
  const companyName = company.name;
  const url =
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY` +
    `&symbol=${companyName}&outputsize=compact&apikey=${APIKEY}`;

  const request = axios.get(url);
  window.history.pushState({}, null, `?stock=${companyName}`);

  return {
    type: "GET_SELECTED_COMPANY",
    payload: request
  };
};

module.exports = {
  getCompanyList,
  getSelectedCompany
};
