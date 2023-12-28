//IMPORTS --------------
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";

import reducers from "./reducers";

//EXPORT FUNCTIONAL COMP-------------------
export default ({ children, initialState = {} }) => {
  // this component is going to allow us to wrap any comps passed as props with the <Provider>
  return (
    <Provider store={createStore(reducers, initialState)}>{children}</Provider>
  );
};
