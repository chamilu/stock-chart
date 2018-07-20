import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "underscore";
import styled from "styled-components";

import Graph from "../components/Graph";

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
  adaptDataForOHCLGraph = graphData => {
    if (!graphData) return [];

    const collection = graphData["Time Series (Daily)"];

    let stocks = [];
    _.each(collection, (value, key) => {
      const obj = {
        x: new Date(key),
        y: [
          parseFloat(value["1. open"]),
          parseFloat(value["2. high"]),
          parseFloat(value["3. low"]),
          parseFloat(value["4. close"])
        ]
      };
      stocks.push(obj);
    });

    return stocks;
  };

  render() {
    const { company } = this.props;
    const adaptedData = this.adaptDataForOHCLGraph(company);

    if (!company) {
      return (
        <NoStockWrapper>
          <NoStockMessage>
            Please select a company to get stock details
          </NoStockMessage>
        </NoStockWrapper>
      );
    }

    return (
      <GraphWrapper>
        <Graph data={adaptedData} />
      </GraphWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    company: state.selectedCompany
  };
};

export default connect(mapStateToProps)(StockGraph);
