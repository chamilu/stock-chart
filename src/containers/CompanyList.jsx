import React, { Component } from "react";
import { connect } from "react-redux";
import getCompanyList from "../actions/companyActions";

import Company from "../components/Company";

class CompanyList extends Component {
  componentDidMount() {
    this.props.getCompanyList();
  }

  renderList = () => {
    if (!this.props.companyList) {
      return null;
    }
    return this.props.companyList.map(company => (
      <Company key={company.id} name={company.name} />
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyList);
