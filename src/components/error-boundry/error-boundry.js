// Core
import React, { Component } from 'react';

// Components
import { ErrorIndicator } from '../error-indicator';

class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
