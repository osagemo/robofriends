import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Header from "../components/Header";
import SimpleBar from "simplebar-react";
import { PropsFromRedux } from "../containers/App";

import "./MainPage.css";
import "simplebar/dist/simplebar.min.css";

export interface IRobot {
  name: string;
  id: number;
  email: string;
}

interface IMainPageState {
  robots: Array<IRobot>;
  searchField: string;
}

export default class MainPage extends Component<
  PropsFromRedux,
  IMainPageState
> {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () =>
    this.props.robots.filter((robot: IRobot) =>
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
        <SearchBox onSearchChange={onSearchChange} />
        <SimpleBar style={{ maxHeight: "75vh" }}>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </SimpleBar>
      </div>
    );
  }
}
