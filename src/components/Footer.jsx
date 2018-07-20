import React, { Component } from "react";
import styled from "styled-components";

const FooterWrap = styled.div`
  height: 8vh;
  background-color: #fff;
  display: table;
  width: 100vw;
`;

const ContentDiv = styled.div`
  width: 18.05vw;
  height: 100%;
  min-width: 130px;
  background-color: #2c3e56;
  display: table-cell;
  box-sizing: border-box;
  font-size: 12px;
  padding-left: 35px;
  color: #506989;
`;

const MidSection = styled.div`
  height: 100%;
  display: table-cell;
  background-color: #f3f3f3;
`;
const SocialWrapper = styled.div`
  text-align: right;
  padding-right: 20px;
`;
const SocialLink = styled.a`
  font-size: 12px;
  padding-left: 30px;
  color: #777;
`;

export default class Footer extends Component {
  render() {
    return (
      <FooterWrap>
        <ContentDiv>
          Demo application for <br /> bambu.life
        </ContentDiv>
        <MidSection>
          <SocialWrapper>
            <SocialLink target="_blank" href="https://github.com/chamilu ">
              github
            </SocialLink>
            <SocialLink target="_blank" href="http://twitter.com/netgeeker ">
              twitter
            </SocialLink>
            <SocialLink target="_blank" href="http://chamilud.blogspot.com/ ">
              blog
            </SocialLink>
            <SocialLink
              target="_blank"
              href="https://www.linkedin.com/in/chamiludayanga"
            >
              linkedin
            </SocialLink>
          </SocialWrapper>
        </MidSection>
      </FooterWrap>
    );
  }
}
