//IMPORT REDUCER ACTIONS ------------------
import { SAVE_COMMENT } from "../actions/types";


//EXPORT REDUCER -------------------------------
export default function(state = [], action) {

    switch(action.type) {
        case SAVE_COMMENT:
            //returns previous state array plus action.payload added as last index
            return [...state, action.payload];
        default:
            return state;
    };

};