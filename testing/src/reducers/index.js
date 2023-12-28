//IMPORTS ---------------------------------------
import { combineReducers } from 'redux';
import commentsReducer from './comments';

//COMBINE + EXPORT REDUCERS ----------------------
export default combineReducers({
    comments: commentsReducer
});