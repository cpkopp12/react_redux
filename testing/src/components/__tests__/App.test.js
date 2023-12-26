import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

//helper function - beforeEach executes before each it()
//because of scoping, declare empty variable wrapped outside of all functions

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

//it functions hold test code

it('shows a comment box', () => {
    //enzyme wrapper, shallow => render <App /> but not children components

    expect(wrapped.find(CommentBox).length).toEqual(1);

});

it('shows a comment list', () => {
    //enzyme wrapper, shallow => render <App /> but not children components

    expect(wrapped.find(CommentList).length).toEqual(1);

});