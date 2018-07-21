import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "underscore";
import styled from "styled-components";

import Graph from "../components/Graph";
import Loader from "../components/Loader";

const GraphWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 1px #ccc;
  position: relative;
`;

const NoStockWrapper = styled.div`
  position: relative;
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
    const { company, loader } = this.props;
    const adaptedData = this.adaptDataForOHCLGraph(company);

    if (!company) {
      return (
        <NoStockWrapper>
          <Loader isLoading={loader.isLoading} />
          <NoStockMessage>
            Please select a company to get stock details
          </NoStockMessage>
        </NoStockWrapper>
      );
    }

    if (adaptedData && adaptedData.length === 0) {
      return (
        <NoStockWrapper>
          <Loader isLoading={loader.isLoading} />
          <NoStockMessage>
            NOTE: Thank you for using Alpha Vantage! <br />Please visit
            <a href="https://www.alphavantage.co/premium/">
              https://www.alphavantage.co/premium/
            </a>{" "}
            if you would like to have a higher API call volume.
          </NoStockMessage>
        </NoStockWrapper>
      );
    }

    return (
      <GraphWrapper>
        <Loader isLoading={loader.isLoading} />
        <Graph data={adaptedData} />
      </GraphWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    company: state.selectedCompany,
    loader: state.loader
  };
};

export default connect(mapStateToProps)(StockGraph);
