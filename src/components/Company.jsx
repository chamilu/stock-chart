import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CompanyWrapper = styled.div`
  flex: 1;
  color: #b1c2d0;
  text-align: left;
`;

const Div = styled.div`
  padding: 8px 0 8px 32px;
  border-left: 3px solid transparent;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background-color: #374760;
    border-left: 3px solid #52a9e4;
  }
`;

export default class Company extends Component {
  static propTypes = {
    changeCompany: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
  };

  render() {
    const { changeCompany, name } = this.props;
    return (
      <CompanyWrapper onClick={() => changeCompany({ name })}>
        <Div>{name}</Div>
      </CompanyWrapper>
    );
  }
}
