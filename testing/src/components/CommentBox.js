import React, { Component } from 'react';

class CommentBox extends Component {

    //initalize state object or handle textarea and change handler
    state = { comment: '' };

    handleChange = (event) => {
        //set state accesses classes state object, input object key variable name with change as value 
        this.setState({ comment: event.target.value })
    };

    handleSubmit = (event) => {

        event.preventDefault();

        // want to call action creator to save the comment

        //empty textarea once comment is saved
        this.setState({ comment: '' });

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Enter Your Comment!</h4>

                {/* STATE: html elment needs to know value (state variable name) 
                 and the change handler function = onChange */}
                <textarea onChange={this.handleChange} value={this.state.comment} />
                
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    };
};

export default CommentBox;