import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCompanyList, getSelectedCompany } from "../actions/companyActions";
import { getParameterByName } from "../utils";

import Company from "../components/Company";

class CompanyList extends Component {
  static propTypes = {
    getCompanyList: PropTypes.func.isRequired,
    changeCompany: PropTypes.func.isRequired,
    companyList: PropTypes.array
  };

  componentDidMount() {
    const { getCompanyList, changeCompany } = this.props;

    const companyName = getParameterByName("stock");
    getCompanyList();

    if (companyName) {
      changeCompany({ name: companyName });
    }
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
