import React, { Component } from "react";
import styled from "styled-components";

const LoaderDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: #fff;
  opacity: 0.7;
`;

const AnimateWrapper = styled.div`
  text-align: center;
  position: absolute;
  left: 50%;
  top: 46%;
`;

export default class Loader extends Component {
  render() {
    const { isLoading } = this.props;

    return (
      isLoading && (
        <LoaderDiv>
          <AnimateWrapper>
            <svg
              width="40px"
              height="40px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
              className="lds-double-ring"
              style={{ background: "none" }}
            >
              <circle
                cx="50"
                cy="50"
                ng-attr-r="{{config.radius}}"
                ng-attr-stroke-width="{{config.width}}"
                ng-attr-stroke="{{config.c1}}"
                ng-attr-stroke-dasharray="{{config.dasharray}}"
                fill="none"
                strokeLinecap="round"
                r="40"
                strokeWidth="10"
                stroke="#2c3e56"
                strokeDasharray="62.83185307179586 62.83185307179586"
                transform="rotate(174 50 50)"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  calcMode="linear"
                  values="0 50 50;360 50 50"
                  keyTimes="0;1"
                  dur="1s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="50"
                cy="50"
                ng-attr-r="{{config.radius2}}"
                ng-attr-stroke-width="{{config.width}}"
                ng-attr-stroke="{{config.c2}}"
                ng-attr-stroke-dasharray="{{config.dasharray2}}"
                ng-attr-stroke-dashoffset="{{config.dashoffset2}}"
                fill="none"
                strokeLinecap="round"
                r="29"
                strokeWidth="10"
                stroke="#677992"
                strokeDasharray="45.553093477052 45.553093477052"
                strokeDashoffset="45.553093477052"
                transform="rotate(-174 50 50)"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  calcMode="linear"
                  values="0 50 50;-360 50 50"
                  keyTimes="0;1"
                  dur="1s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </AnimateWrapper>
        </LoaderDiv>
      )
    );
  }
}
