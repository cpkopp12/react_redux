//IMPORTS -----------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
// redux provider: listens to the main app comp as well as all the child components
// to enforce global state
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';


import App from './components/App';


//RENDER APP COMPONENT ------------------------------------

ReactDOM.render(
    //provider accepts a store property which we specify here
    // createStore method takes two parameters, our reducers index.js as well as the intial state
    <Provider store={createStore(reducers, {})}>
        <App />
    </Provider>,
    document.querySelector('#root'));