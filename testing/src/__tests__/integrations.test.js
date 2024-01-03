import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from '../Root';
import App from '../components/App';

//moxios to simulate axios request in /actions/index.js
beforeEach(() => {
  moxios.install();
  //response just needs to match what where taking in comments reducer, name property of object
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }],
  });
});

//unisntall mock request
afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  // render entire app

  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  //find the fectchComments button and click it,
  // added class name to button to make it easier to find
  wrapped.find('.fetch-comments').simulate('click');

  //moxios needs a second
  //expect to find a list of comments
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);

    //need done function for jest with delays
    done();

    wrapped.unmount();
  });
});
