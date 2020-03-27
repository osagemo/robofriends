import React from "react";
import { setSearchField, fetchRobots } from "../actions";
import { connect } from "react-redux";
import MainPage from "../components/MainPage";

const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(fetchRobots())
});

export class App extends React.Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
