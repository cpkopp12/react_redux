//IMPORTS --------------
import React from "react";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import reducers from "./reducers";

//EXPORT FUNCTIONAL COMP-------------------
export default (props) => {
    // this component is going to allow us to wrap any comps passed as props with the <Provider>
    return (
        <Provider store={createStore(reducers, {})}>
            {props.children}
        </Provider>
    );
};