import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { robots: [], searchField: "" };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ robots: users });
            });
    }

    onSearchChange = event => {
        this.setState({ searchField: event.target.value });
    };
    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField);
        });

        if (!robots.length) {
            return <h1>Fetching users...</h1>;
        }

        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <SimpleBar style={{ maxHeight: "75vh" }}>
                    <CardList robots={filteredRobots} />
                </SimpleBar>
            </div>
        );
    }
}