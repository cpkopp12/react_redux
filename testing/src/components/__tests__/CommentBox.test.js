//IMPORTS ---------------------------------------------
import React from 'react';
// full dom requires clean up code in it blocks
import { mount } from 'enzyme';

import CommentBox from '../CommentBox';

//GLOBALE VARS AND FUNCS ------------------------------------

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

//clean up for full dom { mount } function
afterEach(() => {
    wrapped.unmount();
}); 


//TESTS -----------------------------------------

it('has a text area and button', () => {

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);

});

// test comment box functionality: find element, simulate a change event,
// provide a fake event object, force component to update, expect textareas value to change

it('has a textarea that users can type in', () => {

    //simulate function requires the html name of an event ('change), not react's callbacks
    //second argument in simulate gets passed to change handler function as the event parameter
    //need keys like target to mirror normal event objects
    wrapped.find('textarea').simulate('change', {
        target: { value: 'new comment'}
    });
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

})