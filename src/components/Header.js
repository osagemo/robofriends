import React, { Component, Fragment } from "react";
import CounterButton from "./CounterButton";
export default class Header extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }
  render() {
    console.log("Header");
    return (
      <Fragment>
        <CounterButton color="red" />
        <h1 className="f1">RoboFriends</h1>;
      </Fragment>
    );
  }
}
