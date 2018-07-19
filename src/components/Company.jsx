import React, { Component } from "react";
import styled from "styled-components";

const CompanyDiv = styled.div`
  flex: 1;
  border: 1px solid #fff;
`;

export default class Company extends Component {
  render() {
    const { changeCompany, name } = this.props;
    return (
      <CompanyDiv onClick={() => changeCompany({ name })}>
        <span>{name}</span>
      </CompanyDiv>
    );
  }
}
