//IMPORTS ---------------------------------------
import React from "react";
import { mount } from "enzyme";

import CommentList from "../CommentList";
import Root from "../../Root";

//GLOBAL FUNCS --------------------------------
let wrapped;

beforeEach(() => {
  //need to pass example comments to test to Root provider
  const initialState = {
    comments: ["comment 1", "comment 2"],
  };

  wrapped = mount(
    // can optionally pass initial state to <Root>
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

//IT STATEMENTS --------------------------------
it("creates one LI per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("shows the text for each comment", () => {
  expect(wrapped.render().text()).toContain("comment 1");
  expect(wrapped.render().text()).toContain("comment 2");
});
