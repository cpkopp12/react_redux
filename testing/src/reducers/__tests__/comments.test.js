//IMPORTS -------------------------------------
import commentsReducer from "../comments";
import { SAVE_COMMENT } from "../../actions/types";

//TESTS ----------------------------------------------
it("handles actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment",
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(["New Comment"]);
});

it("handles action with unknownn type", () => {
  const newState = commentsReducer([], { type: "adsfsdsf" });

  expect(newState).toEqual([]);
});
