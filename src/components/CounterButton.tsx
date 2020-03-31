import React, { Component } from "react";

interface ICounterButtonProps {}

interface ICounterButtonState {
  count: number;
}

export default class CounterButton extends Component<
  ICounterButtonProps,
  ICounterButtonState
> {
  constructor(props: ICounterButtonProps) {
    super(props);
    this.state = {
      count: 0
    };
  }

  shouldComponentUpdate(nextState: ICounterButtonState) {
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
        <button id="counter" onClick={this.updateCount}>
          Count: {this.state.count}
        </button>
      </div>
    );
  }
}
