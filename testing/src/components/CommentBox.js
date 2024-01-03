//IMPORTS -------------------------------------
import React, { Component } from 'react';
//redux imports --
import { connect } from 'react-redux';
import * as actions from '../actions';

//CLASS COMPONENT ----------------------------
class CommentBox extends Component {
  //initalize state object or handle textarea and change handler
  state = { comment: '' };

  handleChange = (event) => {
    //set state accesses classes state object, input object key variable name with change as value
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.saveComment(this.state.comment);

    //empty textarea once comment is saved
    this.setState({ comment: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Enter Your Comment!</h4>

          {/* STATE: html elment needs to know value (state variable name) 
                 and the change handler function = onChange */}
          <textarea onChange={this.handleChange} value={this.state.comment} />

          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    );
  }
}

//EXPORT CLASS COMPONENT WITH REDUX CONNECT ------------------------
//connect parameters: map state to props(null), action creators (imported * from actions)
export default connect(null, actions)(CommentBox);
