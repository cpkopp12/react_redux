//IMPORTS ---------------------------------------
import { combineReducers } from 'redux';
import commentsReducer from './comments';
import authReducer from './auth';

//COMBINE + EXPORT REDUCERS ----------------------
export default combineReducers({
  comments: commentsReducer,
  auth: authReducer,
});
