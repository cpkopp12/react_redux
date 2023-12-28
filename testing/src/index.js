//IMPORTS -----------------------------------
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';
import App from './components/App';


//RENDER APP COMPONENT ------------------------------------

ReactDOM.render(
    <Root>
        <App />
    </Root>,
    document.querySelector('#root'));


//HELPER FUNCTION TO CONNECT OUR REDUX PROVIDER TO TEST FILE COMPONENTS -----------------