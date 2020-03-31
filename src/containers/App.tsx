import React from "react";
import { setSearchField, thunkFetchRobots } from "../actions";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import MainPage from "../components/MainPage";
import { RootState } from "../store";

const mapStateToProps = (state: RootState) => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch<any>(thunkFetchRobots())
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export class App extends React.Component<PropsFromRedux, {}> {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connector(App);
