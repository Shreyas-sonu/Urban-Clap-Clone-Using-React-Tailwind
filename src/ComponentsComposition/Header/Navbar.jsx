import React, { Component } from "react";
import Menu from "./Menu";
import Logo from "./Logo";

export default class Navbar extends Component {
  render() {
    return (
      <div id="nav">
        <Logo />
        <Menu />
      </div>
    );
  }
}
