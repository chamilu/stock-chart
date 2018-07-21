import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getParameterByName } from "../utils";
import { getCompanyList, getSelectedCompany } from "../actions/companyActions";
import { showGraphLoader, hideGraphLoader } from "../actions/loaderActions";

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
      dispatch(showGraphLoader());
      dispatch(getSelectedCompany(company))
        .then(() => {
          dispatch(hideGraphLoader());
        })
        .catch(() => {
          dispatch(hideGraphLoader());
          alert("Something went wrong. Please try again.");
        });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyList);
