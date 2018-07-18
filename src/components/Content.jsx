import React, { Component } from "react";
import styled from "styled-components";

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

const LeftColItem = styled.div`
  flex: 1;
  border: 1px solid #fff;
`;

export default class Footer extends Component {
  render() {
    return (
      <ContentWrap>
        <LeftCol>
          <LeftColItem>1</LeftColItem>
          <LeftColItem>1</LeftColItem>
          <LeftColItem>1</LeftColItem>
          <LeftColItem>1</LeftColItem>
          <LeftColItem>1</LeftColItem>
          <LeftColItem>1</LeftColItem>
          <LeftColItem>1</LeftColItem>
        </LeftCol>
        <RightCol>this is content.</RightCol>
      </ContentWrap>
    );
  }
}
