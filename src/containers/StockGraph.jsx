import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const GraphWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 1px #ccc;
`;

const NoStockWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: table;
`;
const NoStockMessage = styled.div`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  color: #777;
  font-size: 12px;
`;

class StockGraph extends Component {
  render() {
    const { company } = this.props;

    if (!company) {
      return (
        <NoStockWrapper>
          <NoStockMessage>
            Please select a company to get stock details
          </NoStockMessage>
        </NoStockWrapper>
      );
    }

    console.log(company);

    return <GraphWrapper />;
  }
}

const mapStateToProps = state => {
  return {
    company: state.selectedCompany
  };
};

export default connect(mapStateToProps)(StockGraph);
