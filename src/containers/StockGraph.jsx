import React, { Component } from "react";
import { connect } from "react-redux";

class StockGraph extends Component {
  render() {
    console.log(this.props.company);
    if (!this.props.company) {
      return <div>Please select a company</div>;
    }

    return (
      <div>
        <span>{this.props.company.name}</span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    company: state.selectedCompany
  };
};

export default connect(mapStateToProps)(StockGraph);
