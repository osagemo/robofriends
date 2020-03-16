import React from "react";
import { setSearchField, fetchRobots } from "../actions";
import { connect } from "react-redux";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import ErrorBoundry from "../components/ErrorBoundry";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";

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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    class App extends React.Component {
        componentDidMount() {
            this.props.onRequestRobots();
        }

        render() {
            const {
                searchField,
                onSearchChange,
                robots,
                isPending
            } = this.props;

            const filteredRobots = robots.filter(robot => {
                return robot.name.toLowerCase().includes(searchField);
            });

            if (isPending) {
                return <h1>Fetching users...</h1>;
            }

            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <SimpleBar style={{ maxHeight: "75vh" }}>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </SimpleBar>
                </div>
            );
        }
    }
);
