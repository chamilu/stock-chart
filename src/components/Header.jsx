import React, { Component } from "react";
import styled from "styled-components";

const HeaderWrap = styled.div`
  height: 8vh;
  background-color: #fff;
  display: table;
  width: 100%;
`;

const LogoWrapper = styled.div`
  width: 18%;
  height: 100%;
  min-width: 130px;
  background-color: #2c3e56;
  display: table-cell;
`;

const LogoText = styled.h3`
  font-family: "Chela One", cursive;
  text-align: left;
  color: #fff;
  padding-top: 20px;
  padding-left: 35px;
  font-weight: 400;
  font-size: 30px;
  letter-spacing: 1px;
`;

const MidSection = styled.div`
  height: 100%;
  display: table-cell;
  box-shadow: 0px 0px 1px #ccc;
`;

const UserMenu = styled.div`
  height: 100%;
  display: table-cell;
  width: 200px;
  vertical-align: middle;
  color: #444;
  font-size: 12px;
  text-align: center;
  box-shadow: 0px 0px 1px #ccc;
`;

export default class Header extends Component {
  render() {
    return (
      <HeaderWrap>
        <LogoWrapper>
          <LogoText>Stocky</LogoText>
        </LogoWrapper>
        <MidSection />
        <UserMenu>Chamil Udayanga</UserMenu>
      </HeaderWrap>
    );
  }
}
