//IMPORT REDUCER ACTIONS ------------------
import { SAVE_COMMENT, FETCH_COMMENTS } from '../actions/types';

//EXPORT REDUCER -------------------------------
function commentsReducer(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      //returns previous state array plus action.payload added as last index
      return [...state, action.payload];
    case FETCH_COMMENTS:
      debugger;
      const comments = action.payload.data.map((comment) => comment.name);
      return [...state, ...comments];
    default:
      return state;
  }
}

export default commentsReducer;
