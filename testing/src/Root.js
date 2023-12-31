//IMPORTS --------------
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import reduxPromise from 'redux-promise';
import stateValidator from './middlewares/stateValidator';
import async from './middlewares/async';

import reducers from './reducers';

//EXPORT FUNCTIONAL COMP-------------------
export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async, stateValidator)
  );
  // this component is going to allow us to wrap any comps passed as props with the <Provider>
  return <Provider store={store}>{children}</Provider>;
};
