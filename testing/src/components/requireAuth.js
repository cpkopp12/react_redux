import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    // component just rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // component just updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    // helper to check auth
    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    // render child componenet
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  // map state to props func
  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
