import React, { Component } from "react";
import styled from "styled-components";

const HeaderWrap = styled.div`
  height: 8vh;
  background-color: #777;
`;

export default class Header extends Component {
  render() {
    return (
      <HeaderWrap>
        <span>header</span>
      </HeaderWrap>
    );
  }
}
