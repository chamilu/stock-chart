import React, { Component } from "react";
import styled from "styled-components";
import CompanyList from "../containers/CompanyList";
import StockGraph from "../containers/StockGraph";

const ContentWrap = styled.div`
  height: 84vh;
  display: flex;
  flex-direction: row;
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 18vw;
  min-width: 130px;
  background-color: #2c3e56;
  padding-top: 30px;
`;

const RightCol = styled.div`
  background-color: #f3f3f3;
  width: 82vw;
  padding: 20px;
  box-sizing: border-box;
`;

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
