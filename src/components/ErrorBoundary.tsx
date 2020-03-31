import React, { Component } from "react";

interface IErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<{}, IErrorBoundaryState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <h1>Oops, something went wrong</h1>;
    }
    return this.props.children;
  }
}
