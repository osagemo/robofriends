import React, { Component } from "react";

export default class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    } else {
      return false;
    }
  }

  updateCount = () => {
    this.setState(state => {
      return { count: state.count + 1 };
    });
  };
  render() {
    return (
      <div>
        <button color={this.props.color} onClick={this.updateCount}>
          Count: {this.state.count}
        </button>
      </div>
    );
  }
}
