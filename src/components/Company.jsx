import React, { Component } from "react";
import styled from "styled-components";

const CompanyDiv = styled.div`
  flex: 1;
  border: 1px solid #fff;
`;

export default class Company extends Component {
  render() {
    return (
      <CompanyDiv>
        <span>{this.props.name}</span>
      </CompanyDiv>
    );
  }
}
