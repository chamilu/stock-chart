const getCompanyList = () => {
  return {
    type: "GET_COMPANY_LIST"
  };
};

const getSelectedCompany = company => {
  return {
    type: "GET_SELECTED_COMPANY",
    payload: company
  };
};

module.exports = {
  getCompanyList,
  getSelectedCompany
};
