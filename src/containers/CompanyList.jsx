import React, { Component } from "react";
import { connect } from "react-redux";
import { getCompanyList, getSelectedCompany } from "../actions/companyActions";

import Company from "../components/Company";

class CompanyList extends Component {
  componentDidMount() {
    this.props.getCompanyList();
  }

  renderList = () => {
    const { companyList, changeCompany } = this.props;

    if (!companyList) {
      return null;
    }
    return companyList.map(company => (
      <Company
        key={company.id}
        name={company.name}
        changeCompany={changeCompany}
      />
    ));
  };

  render() {
    return this.renderList();
  }
}

const mapStateToProps = state => {
  return {
    companyList: state.companyList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCompanyList: () => {
      dispatch(getCompanyList());
    },
    changeCompany: company => {
      dispatch(getSelectedCompany(company));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyList);
