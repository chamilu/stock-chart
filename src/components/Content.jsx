import React, { Component } from "react";
import styled from "styled-components";
import CompanyList from "../containers/CompanyList";
import StockGraph from "../containers/StockGraph";

const ContentWrap = styled.div`
  height: 84vh;
  background-color: #aaa;
  display: flex;
  flex-direction: row;
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 200px;
  background-color: #777;
`;

const RightCol = styled.div``;

export default class Footer extends Component {
  render() {
    return (
      <ContentWrap>
        <LeftCol>
          <CompanyList />
        </LeftCol>
        <RightCol>
          <StockGraph />
        </RightCol>
      </ContentWrap>
    );
  }
}
