//IMPORTS -------------------------------------
import React, { Component } from 'react';
import { connect } from 'react-redux';

//CLASS COMPONENT ---------------------------
class CommentList extends Component {
  //helper func for rendering comments
  renderComments() {
    return this.props.comments.map((comment) => {
      // <li>s in react need unique key
      return <li key={comment}>{comment}</li>;
    });
  }

  //components JSX
  render() {
    return (
      <div>
        <h4>Comment List</h4>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

//EXPORT + REDUX CONNECT -----------------------------
// need a map state to props function for connect param
function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
