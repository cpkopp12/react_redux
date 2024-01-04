// IMPORTS ------------------------------------------
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import * as actions from '../actions';

// APP CLASS COMPONENT --------------------------------
class App extends Component {
  //signin button logic
  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
      );
    }
  }

  // serves as nav bar
  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  //App render
  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

//REDUX ----------------------------------------
function mapStateToProps(state) {
  return { auth: state.auth };
}

// EXPORT ---------------------------------------
export default connect(mapStateToProps, actions)(App);
