//REDUCER ACTION IMPORTS --------------------------
import { SAVE_COMMENT } from "./types";

//REDUCER EXPORT FUNCTIONS -------------------
export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
};