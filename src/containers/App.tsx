import React from "react";
import { setSearchField, thunkFetchRobots } from "../actions";
import { connect } from "react-redux";
import MainPage from "../components/MainPage";
import { RootState } from "../store";

const mapStateToProps = (state: RootState) => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(thunkFetchRobots())
});

export class App extends React.Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
