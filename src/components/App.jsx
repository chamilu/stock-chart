import React, { Component } from "react";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const wrapper = {
  height: "100vh"
};

export default class App extends Component {
  render() {
    return (
      <div style={wrapper}>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
