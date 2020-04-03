import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Header from "../components/Header";
import SimpleBar from "simplebar-react";

import "./MainPage.css";
import "simplebar/dist/simplebar.min.css";

export default class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () =>
    this.props.robots.filter(robot =>
      robot.name.toLowerCase().includes(this.props.searchField)
    );

  render() {
    const { onSearchChange, isPending } = this.props;
    const filteredRobots = this.filterRobots();

    if (isPending) {
      return <h1>Fetching users...</h1>;
    }

    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <SimpleBar style={{ maxHeight: "75vh" }}>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </SimpleBar>
      </div>
    );
  }
}
