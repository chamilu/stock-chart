import React, { Component } from "react";
import styled from "styled-components";

const FooterWrap = styled.div`
  height: 8vh;
  background-color: #ccc;
`;

export default class Footer extends Component {
  render() {
    return (
      <FooterWrap>
        <span>footer</span>
      </FooterWrap>
    );
  }
}
